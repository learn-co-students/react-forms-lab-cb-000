import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      notValid: true
    };
  }

  validatePoem = (poem) => {
      const poemArray = poem.split(/[\r\n]/).map(line => line.trim())
      const linecount = poemArray.length
      if(linecount === 3){
        const firstLineCount = poemArray[0].split(" ").length
        const secondLineCount = poemArray[1].split(" ").length
        const thirdLineCount = poemArray[2].split(" ").length
        if(firstLineCount === 5 && secondLineCount === 3 && thirdLineCount === 5) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      notValid: this.validatePoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
          {this.state.notValid ?
            (<div id="poem-validation-error" style={{ color: "red" }} >
            This poem is not written in the right structure!
          </div>):null}
      </div>
    );
  }
}

export default PoemWriter;
