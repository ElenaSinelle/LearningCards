const fs = require("fs");
const path = require("path");

// Функция для парсинга классов из файла .jsx
function extractClassesFromJSX(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const classNames = new Set();

  // Регулярное выражение для поиска стилей, импортированных как переменные
  const classRegex = /className=\{styles\.([^\}]+)\}/g;
  let match;
  while ((match = classRegex.exec(fileContent)) !== null) {
    match[1]
      .split(" ")
      .forEach((className) => classNames.add(className.trim()));
  }

  return Array.from(classNames);
}

// Функция для чтения существующих классов и их стилей из файла .scss
function readExistingScss(scssFilePath) {
  if (!fs.existsSync(scssFilePath)) {
    return "";
  }
  return fs.readFileSync(scssFilePath, "utf8");
}

// Функция для записи классов в файл .module.scss, не удаляя существующие стили
function writeClassesToScss(classNames, scssFilePath) {
  const existingContent = readExistingScss(scssFilePath);
  const existingClassNames = new Set();

  const classRegex = /\.([a-zA-Z0-9_-]+) \{/g;
  let match;
  while ((match = classRegex.exec(existingContent)) !== null) {
    existingClassNames.add(match[1]);
  }

  const newClassNames = classNames.filter(
    (className) => !existingClassNames.has(className)
  );
  const newScssContent = newClassNames
    .map((className) => `.${className} {}`)
    .join("\n");

  const finalContent =
    existingContent + (newScssContent ? "\n" + newScssContent : "");
  fs.writeFileSync(scssFilePath, finalContent, "utf8");
}

// Функция для записи классов с вложенностью в файл .module.scss
function writeNestedClassesToScss(classNames, scssFilePath) {
  const existingContent = readExistingScss(scssFilePath);
  const existingClassNames = new Set();

  const classRegex = /\.([a-zA-Z0-9_-]+) \{/g;
  let match;
  while ((match = classRegex.exec(existingContent)) !== null) {
    existingClassNames.add(match[1]);
  }

  const newClassNames = classNames.filter(
    (className) => !existingClassNames.has(className)
  );
  const nestedClasses = newClassNames
    .map((className) => {
      const parts = className.split("__");
      if (parts.length > 1) {
        return `.${parts[0]} {\n  &__${parts[1]} {}\n}`;
      } else {
        return `.${className} {}`;
      }
    })
    .join("\n");

  const finalContent =
    existingContent + (nestedClasses ? "\n" + nestedClasses : "");
  fs.writeFileSync(scssFilePath, finalContent, "utf8");
}

// Функция для рекурсивного поиска всех файлов .jsx в директории
function getAllJSXFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllJSXFiles(filePath, fileList);
    } else if (filePath.endsWith(".jsx")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Главная функция для обработки всех файлов .jsx
function processAllJSXFiles(projectDir) {
  const jsxFiles = getAllJSXFiles(projectDir);

  jsxFiles.forEach((file) => {
    const classNames = extractClassesFromJSX(file);
    if (classNames.length > 0) {
      const fileName = path.basename(file, ".jsx");
      const scssFilePath = path.join(
        path.dirname(file),
        `${fileName}.module.scss`
      );
      writeNestedClassesToScss(classNames, scssFilePath);
      console.log(`Классы из ${file} успешно обновлены в ${scssFilePath}`);
    }
  });
}

// Укажи путь к корневой директории проекта
const projectDir = path.join(__dirname, "src"); // Измени 'src' на корневую директорию твоих файлов .jsx

// Запусти обработку всех файлов .jsx
processAllJSXFiles(projectDir);

// Функция writeNestedClassesToScss:
// Добавлена новая функция для записи классов с сохранением вложенности. Она проверяет, если имя класса содержит двойное подчеркивание (__), оно обрабатывается как вложенный класс.
// Классы без двойного подчеркивания записываются как обычные классы.
// Эта функция объединяет существующее содержимое файла .scss с новыми классами, не удаляя существующие стили.
