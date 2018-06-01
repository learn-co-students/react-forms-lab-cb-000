import React from "react";

function countWords(line) {
  return line.split(' ').filter((l) => l).length;
}

function validatePoem(poem) {
  const poemLines = poem.split('\n').filter((l) => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
  
  handleChange = event => {
    const content = event.target.value;
    
    content ? this.setState({
      value: content,
      isValid: validatePoem(content)
    }) : null
  }
}

export default PoemWriter;
