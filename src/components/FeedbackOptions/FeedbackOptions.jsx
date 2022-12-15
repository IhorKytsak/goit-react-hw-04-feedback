import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map(option => {
          return (
            <Button
              key={option}
              onClick={() => {
                this.props.onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
