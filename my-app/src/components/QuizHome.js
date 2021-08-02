import React, { Component } from 'react';
import Quiz from './Quiz';
import _ from 'lodash';
import Result from './Result';

class QuizHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            questions:null,
            answers:null,
            submitted:false
        }
    }

    componentDidMount(){
        let category = this.props.match.params.category;
        let level = this.props.match.params.level;

        fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`
        )
        .then((res) => res.json())
        .then((questions) => {
            this.setState({
                questions:questions.results
            })
        })
    }
    handleAnswerSelect = (ans, currentQuestion) => {
        if (!this.state.answers[currentQuestion]) {
          this.setState((prevState) => {
            let updatedAns = _.concat(prevState.answers, ans);
            return {
              answers: updatedAns,
            };
          });
        } else {
          this.setState((prevState) => {
            prevState.answers[currentQuestion] = ans;
            return {
              answers: prevState.answers,
            };
          });
        }
      };
    
      handleSubmit = () => {
        if (!this.state.answers[9]) {
          alert('You must select answer of current question.');
        } else {
          this.setState((prevState) => {
            return {
              submitted: !prevState.submitted,
            };
          });
        }
      };

    render(){
        return(
            <>
            <section className = "">
                {this.state.questions && !this.state.submitted ? {
                    <Quiz
                    questions = {this.state.questions}
                    allAnswers = {this.state.answers}
                    submitted = {this.state.submitted}
                    handleAnswerSelect= {this.handleAnswerSubmit}
                    handleSubmit = {this.handleAnswerSubmit}
                    />
        ):(
                }}
                {if(this.state.submitted) ? {
                    <Result
                    questions = {this.state.questions}
                    allAnswers = {this.state.allAnswers}
                }}
            </section>
            </>
        )
    }
}

export default QuizHome

export default QuizHome;