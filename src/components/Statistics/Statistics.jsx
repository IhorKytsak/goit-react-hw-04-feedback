import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { StatListItem } from './Statistics.styled';
import { notificationMsg } from '../../constants';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
