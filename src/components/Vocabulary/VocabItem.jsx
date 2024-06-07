import React, { useState, useContext, useEffect } from "react";
import { CustomContext } from "../../Context";
import styles from "./Vocabulary.module.scss";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";

const themes = [themePink, themeBlue, themeGreen];

export default function VocabItem(props) {
  const { english, transcription, russian } = props;
  const { updateTerm, removeTerm } = useContext(CustomContext);
  const [editing, setEditing] = useState(false);

  // temporary states - for inputs that being edited
  const [tempTerm, setTempTerm] = useState({
    english,
    transcription,
    russian,
  });

  // saved states for edited and saved inputs
  const [savedTerm, setSavedTerm] = useState({
    english,
    transcription,
    russian,
  });

  // update edited inputs and inputs under editing after each render
  useEffect(() => {
    setTempTerm({ english, transcription, russian });
    setSavedTerm({ english, transcription, russian });
  }, [english, transcription, russian]);

  // handlers
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTerm(tempTerm); //from context
    setSavedTerm(tempTerm);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempTerm(savedTerm);
    setEditing(false);
  };

  return (
    <div className={styles.vocab__line}>
      <div className={styles.vocab__itemContainer}>
        {!editing ? (
          <>
            <div>{savedTerm.english}</div>
            <div>{savedTerm.transcription}</div>
            <div>{savedTerm.russian}</div>
          </>
        ) : (
          <>
            <input
              // value={tempTerm.english}
              defaultValue=""
              onChange={(e) =>
                setTempTerm({ ...tempTerm, english: e.target.value })
              }
            />
            <input
              // value={tempTerm.transcription}
              defaultValue=""
              onChange={(e) =>
                setTempTerm({ ...tempTerm, transcription: e.target.value })
              }
            />
            <input
              // value={tempTerm.russian}
              defaultValue=""
              onChange={(e) =>
                setTempTerm({ ...tempTerm, russian: e.target.value })
              }
            />
          </>
        )}
      </div>

      <div className={styles.vocab__btnsContainer}>
        {editing ? (
          <>
            <button
              className={`${styles.vocab__btn} ${themes[1].bg}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`${styles.vocab__btn} ${themes[2].bg}`}
              onClick={handleSave}
            >
              Save Word
            </button>
          </>
        ) : (
          <button
            className={`${styles.vocab__btn} ${themes[1].bg}`}
            onClick={handleEdit}
          >
            Edit Word
          </button>
        )}
        <button
          className={`${styles.vocab__btn} ${themes[0].bg}`}
          onClick={() => removeTerm(english)}
        >
          Delete Word
        </button>
      </div>
    </div>
  );
}
