import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='categories-sec'>
        <h2 className='sec-heading'>Select Difficulty Level</h2>
        <div className='container flex center fw  categories-div'>
          <button
            onClick={(event) => {
              this.props.handleDifficulty(event, 'easy');
            }}
            className={
              this.props.level === 'easy' ? 'btn btn-sec' : 'btn btn-pri'
            }
          >
            Easy
          </button>
          <button
            onClick={(event) => {
              this.props.handleDifficulty(event, 'medium');
            }}
            className={
              this.props.level === 'medium' ? 'btn btn-sec' : 'btn btn-pri'
            }
          >
            Medium
          </button>
          <button
            onClick={(event) => {
              this.props.handleDifficulty(event, 'hard');
            }}
            className={
              this.props.level === 'hard' ? 'btn btn-sec' : 'btn btn-pri'
            }
          >
            Hard
          </button>
        </div>

        {this.props.category && this.props.level ? (
          <div className='home-btn-div sec-padding flex center'>
            <NavLink
              to={`/quiz/${this.props.category.id}/${this.props.level}`}
              className='btn btn-sec'
            >
              {' '}
              Start Quiz
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default Levels;