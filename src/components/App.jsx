import { useState } from 'react';

import MainMenu from './Feedback/MainMenu/MainMenu';
import Results from './Feedback/Results/Results';
import Block from './Feedback/Block/Block';
import Notification from './Feedback/Notification/Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const addValue = keyName => {
    setState(prevState => ({
      ...prevState,
      [keyName]: prevState[keyName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };
  const PositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = state.good;
    return Number(((value / total) * 100).toFixed(2));
  };

  const { good, neutral, bad } = state;
  const nameBtn = Object.keys(state);

  const total = countTotalFeedback();
  const positive = PositiveFeedbackPercentage();

  return (
    <div>
      <Block title=" Please leave feedback">
        <MainMenu options={nameBtn} addValue={addValue} />
      </Block>

      <Block title=" Statistic">
        {total === 0 ? (
          <Notification />
        ) : (
          <Results
            total={total}
            positive={positive}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        )}
      </Block>
    </div>
  );
};

export { App };
