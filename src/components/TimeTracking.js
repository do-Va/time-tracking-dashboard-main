import styled from 'styled-components';
import Time from './Time';

const TimeTracking = ({ timeTracking, data }) => {
  return (
    <Wrapper>
      {data.map((data, index) => {
        return <Time key={index} timeTracking={timeTracking} {...data} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5em;

  @media only screen and (min-width: 1054px) {
    width: 624px;
  }

  @media only screen and (min-width: 1400px) {
    width: 950px;
  }
`;
export default TimeTracking;
