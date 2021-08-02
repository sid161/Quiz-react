import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      score: null,
    };
  }

  componentDidMount() {
    let questions = this.props.questions;
    let allAnswers = this.props.allAnswers;
    let score = 0;

    let result = questions.map((question, i) => {
      if (question.correct_answer === allAnswers[i]) {
        score = score + 1;
      }
      let obj = {
        question: question.question,
        correct_answer: question.correct_answer,
        yourAns: allAnswers[i],
      };
      return obj;
    });
    this.setState({ result: result, score: score });
  }
  render(){
      return(
          <>
          <section className = "">
              <h2>Your score is : {this.state.score}</h2>
              {this.state.result ? (
                  <table>
                      <thead>
                          <tr>
                              <th>Is correct</th>
                              <th>Qustion</th>
                              <th>Answer</th>
                          </tr>
                          {this.state.result.map((ele,index) => {
                              
                          })}
                      </thead>
                  </table>
              )}
          </section>
          </>
      )
  }
}

export default Result;