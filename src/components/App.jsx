import { Component } from 'react';

import MainMenu from './Feedback/MainMenu/MainMenu';
import Results from './Feedback/Results/Results';
import Block from './Feedback/Block/Block';
import Notification from './Feedback/Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addValue = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }

    const value = this.state.good;
    return Number(((value / total) * 100).toFixed(2));
  }
  render() {
    const { good, neutral, bad } = this.state;
    const nameBtn = Object.keys(this.state);

    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Block title=" Please leave feedback">
          <MainMenu options={nameBtn} addValue={this.addValue} />
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
  }
}

export { App };
