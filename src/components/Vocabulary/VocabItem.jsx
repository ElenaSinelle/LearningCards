import React, { useState } from "react";
import WordPlain from "./WordPlain";
import WordInput from "./WordInput";
import styles from "./Vocabulary.module.scss";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";

export default function VocabItem({ term }) {
  const [editing, setEditing] = useState(false);
  const themes = [themePink, themeBlue, themeGreen];

  return (
    <div className={styles.vocab__line}>
      {editing ? (
        <WordInput
          id={term.id}
          english={term.english}
          transcription={term.transcription}
          russian={term.russian}
        />
      ) : (
        <WordPlain
          id={term.id}
          english={term.english}
          transcription={term.transcription}
          russian={term.russian}
        />
      )}
      <div className={styles.vocab__btnsContainer}>
        {editing ? (
          <button
            className={`${styles.vocab__btn} ${themes[1].bg}`}
            onClick={() => setEditing(false)}
          >
            Save Word
          </button>
        ) : (
          ""
        )}

        <button
          className={`${styles.vocab__btn} ${themes[2].bg}`}
          onClick={() => setEditing(true)}
        >
          Edit Word
        </button>

        <button className={`${styles.vocab__btn} ${themes[0].bg}`}>
          Delete Word
        </button>
      </div>
    </div>
  );
}
