import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import { notificationMsg } from 'constants';

import { StatListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <StatListItem>Good: {good}</StatListItem>
        <StatListItem>Neutral: {neutral}</StatListItem>
        <StatListItem>Bad: {bad}</StatListItem>
        <StatListItem>Total: {total}</StatListItem>
        <StatListItem>Positive feedback: {positivePercentage}%</StatListItem>
      </ul>
    ) : (
      <Notification message={notificationMsg} />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
