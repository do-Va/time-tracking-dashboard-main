import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from './components/UserInfo';
import TimeTracking from './components/TimeTracking';
import data from './data/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeTracking: 'weekly',
      data,
    };

    this.setTimeTracking = this.setTimeTracking.bind(this);
  }

  setTimeTracking(e) {
    this.setState({ timeTracking: e });
  }

  render() {
    return (
      <Wrapper>
        <UserInfo setTimeTracking={this.setTimeTracking} />
        <TimeTracking {...this.state} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 2em;
  gap: 1.5em;

  @media only screen and (min-width: 1054px) {
    flex-direction: row;
  }
`;

export default App;
