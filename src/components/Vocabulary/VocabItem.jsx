import React, { useState } from "react";
import WordPlain from "./WordPlain";
import WordInput from "./WordInput";
import styles from "./Vocabulary.module.scss";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";

export default function VocabItem({ word }) {
  const [editing, setEditing] = useState(false);
  const themes = [themePink, themeBlue, themeGreen];

  return (
    <div className={styles.vocab__line}>
      {editing ? (
        <WordInput
          id={word.id}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
        />
      ) : (
        <WordPlain
          id={word.id}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
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
