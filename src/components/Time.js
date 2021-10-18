import styled from 'styled-components';

import {
  ellipsisIcon,
  exerciseIcon,
  playIcon,
  selfCareIcon,
  socialIcon,
  studyIcon,
  workIcon,
} from '../images';

const Time = ({ title, timeframes, color, timeTracking }) => {
  const { current, previous } = timeframes[timeTracking];

  let str = title.toLowerCase();

  if (str === 'self care') {
    str = str.split(' ');
    str[1] = str[1][0].toUpperCase() + str[1].slice(1);
    str = str.join('');
  }

  const getImage = () => {
    switch (str) {
      case 'work':
        return workIcon;

      case 'study':
        return studyIcon;

      case 'social':
        return socialIcon;

      case 'selfCare':
        return selfCareIcon;

      case 'play':
        return playIcon;

      case 'exercise':
        return exerciseIcon;

      default:
        throw new Error('Icon does not exist');
    }
  };

  return (
    <Wrapper style={{ background: `var(${color})` }}>
      <img src={getImage()} alt={`${title} icon`} className="img-icon" />
      <div className="content">
        <div className="header">
          <p className="title">{title}</p>
          <img src={ellipsisIcon} alt="ellipsis icon" className="icon" />
        </div>
        <div className="footer">
          <p className="current">{current}hrs</p>
          <p className="revious">Last Week - {previous}hrs</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 337.5px;
  flex-direction: column;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  .img-icon {
    width: 50px;
    align-self: flex-end;
    margin-right: 1em;
    margin-top: -3px;
    position: absolute;
    z-index: 0;
  }

  .content {
    background: var(--clr-primary-bg-dark);
    border-radius: inherit;
    padding: 1.5em;
    color: var(--clr-primary);
    z-index: 1;
    margin-top: 1.8em;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.125em;
      margin-bottom: 0.5em;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .current {
        font-size: 1.6em;
        font-weight: 300;
      }

      .revious {
        color: var(--clr-primary-bg-light);
      }
    }
  }

  @media only screen and (min-width: 1054px) {
    width: 300px;

    .footer {
      display: flex;
      flex-direction: column;
      align-items: start !important;

      .current {
        font-size: 5em !important;
      }
    }
  }
`;
export default Time;
