import {useState} from 'react';
import {Container} from './styles'
import { TextField } from '@material-ui/core';


function ReplyComment({ addComment }) {
  const [textInput, setTextInput] = useState(null);
  const handleChange = (event) => {
    setTextInput(event.target.value);
  };
  const keyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (textInput.length) {
        setTextInput("");
        addComment(textInput);
      }
    }
  };

  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={textInput || ""}
          label="Reply"
          onKeyDown={keyDown}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
}

export default ReplyComment;
