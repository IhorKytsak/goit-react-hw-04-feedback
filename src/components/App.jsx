import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import { feedbackOptions, sectionTitles } from '../constants';

const App = () => {
  const initState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(initState);

  const feedbackHandler = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title={sectionTitles.feedback}>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={feedbackHandler}
        />
      </Section>

      <Section title={sectionTitles.statistics}>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
