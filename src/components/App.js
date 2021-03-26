import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    } else {
      return 'not-handled';
    }
  }

  function _onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

  return (
    <div style={styles.root}>
      <button onClick={_onBoldClick}>Bold</button>
      <div style={styles.editor}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  ); 
}

export default App;

const styles = {
  root: {
    fontFamily: "'Helvetic', sans-serif",
    padding: 20,
    width: 600,
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
};

