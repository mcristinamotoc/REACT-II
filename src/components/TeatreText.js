import React, { Component } from "react";
import LineTeatre from "../data/teatre.json";
import styled from "styled-components";

//Add styled-components
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  display: inline;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const P = styled.h2`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 1.5em;
  color: palevioletred;
  padding: 1rem;
  margin: 2rem;
`;

// const Paragraph=styled.h2`
//   font-size: 1.5em;
//   color: palevioletred;
//   padding: 1rem;
//   margin: 2rem;
// `

//Class Component
class TeatreText extends Component {
  state = {
      currentLine: 0,
      teatreLine: "",
      linesJson: LineTeatre
    };
  

  // Add onclick functionality to buttons next and previous

  increment = () => {
    this.setState({
      currentLine: this.state.currentLine + 1,
      teatreLine: this.state.linesJson[this.state.currentLine],
    });
  };

  decrement = () => {
    this.setState({
      currentLine: this.state.currentLine - 1,
      teatreLine: this.state.linesJson[this.state.currentLine-2],
    });
  };
 
  
 
  render() {
    return (
      <div>
        <ButtonDiv>
          <Button onClick={this.decrement}>Anterior</Button>
          <Button onClick={this.increment}>Següent</Button>
        </ButtonDiv>
        
        <div>
          <P>{this.state.teatreLine}</P>
        </div>

        {/* <Paragraph>
            {LineTeatre.map((item) => {
        return (
          <div>
           {item} 
          </div>
        );
      })} 
        </Paragraph> */}
      
      </div>
    );
  }
}

export default TeatreText;
