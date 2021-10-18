import React from 'react';
import styled from 'styled-components';

import userImg from '../images/image-jeremy.png';

const timeTrackings = ['daily', 'weekly', 'monthly'];

const UserInfo = ({ setTimeTracking }) => {
  const handleClick = e => {
    setTimeTracking(e.target.innerHTML);
  };

  return (
    <Wrapper>
      <div className="content">
        <img src={userImg} alt="Jeremy Robson" className="user-img" />
        <div className="container">
          <p>Report for</p>
          <h4>Jeremy Robson</h4>
        </div>
      </div>
      <ul className="time-tracking">
        {timeTrackings.map((time, index) => {
          return (
            <li key={index} onClick={handleClick}>
              {time}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 337.5px;
  background: var(--clr-primary-bg-dark);
  border-radius: 15px;

  .content {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 2em;
    color: var(--clr-primary);
    background: var(--clr-user-bg);
    border-radius: inherit;

    .user-img {
      width: 75px;
      border: 3px solid #fff;
      border-radius: 50%;
    }

    p {
      color: var(--clr-secondary);
    }

    h4 {
      font-weight: 300;
      font-size: 1.6em;
    }
  }

  .time-tracking {
    display: flex;
    justify-content: space-between;
    padding: 1.5em;
    color: var(--clr-primary-bg-light);
  }

  li {
    transition: color 0.2s linear;
    text-transform: uppercase;
  }

  li:hover,
  li .active {
    color: var(--clr-primary);
  }

  @media only screen and (min-width: 1054px) {
    height: 467.6px;
    width: 250px;

    .content {
      flex-direction: column;
      align-items: flex-start;
      height: 70%;
    }

    .container {
      h4 {
        font-size: 3em;
      }
    }

    .time-tracking {
      height: 30%;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

export default UserInfo;
