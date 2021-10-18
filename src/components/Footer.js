import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Challenge by &nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/do-Va" target="_blank">
          doVa
        </a>
        .
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  margin-bottom: 2em;

  p {
    color: var(--clr-primary);
    font-size: 0.7em;
  }

  a {
    color: var(--clr-secondary);
  }
`;

export default Footer;
