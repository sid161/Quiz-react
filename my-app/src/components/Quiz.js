import React, { Component } from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeQuestion:0,
            answers:null,
            correctAnswer: null
        }
    }

    componentDidMount(prevProps,prevState){
        if (prevState.activeQuestion !== this.state.activeQuestion) {
            let incorrectQues = [
              ...this.props.questions[this.state.activeQuestion].incorrect_answers,
            ];
    }

    handleNextQuestion = () => {
        if (!this.props.allAnswers[this.state.activeQuestion]) {
          alert('You must select answer of current question.');
        } else {
          this.setState((prevState) => {
            return {
              activeQuestion: prevState.activeQuestion + 1,
            };
          });
        }
      };
    render(){
        return(
            <>
            {
                let incorrectQues = [...this.props.questions[this.state.activeQuestion].incorrect_answers]
              
                let correctAns =this.props.questions[this.state.currentQuestion].correct_answer;

                let allAns = _.uniq(_.concat(incorrectQues, correctAns));

                this.setState({
                    answers: allAns,
                    correctAnswer: correctAns,
                  });
            }
            </>
        )
    }
}

export default Quiz