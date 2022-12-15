import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { StatListItem } from './Statistics.styled';
import { notificationMsg } from '../../constants';

class Statistics extends Component {
  render() {
    return (
      <>
        {this.props.total ? (
          <ul>
            <StatListItem>Good: {this.props.good}</StatListItem>
            <StatListItem>Neutral: {this.props.neutral}</StatListItem>
            <StatListItem>Bad: {this.props.bad}</StatListItem>
            <StatListItem>Total: {this.props.total}</StatListItem>
            <StatListItem>
              Positive feedback: {this.props.positivePercentage}%
            </StatListItem>
          </ul>
        ) : (
          <Notification message={notificationMsg} />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
