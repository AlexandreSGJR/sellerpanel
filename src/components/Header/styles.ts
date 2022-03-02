import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  padding-inline: 32px;
  background-image: linear-gradient(to right, #ac1e59, #7e16bb);

  div.option {
    font-size: 16px;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }

    :nth-child(n + 2) {
      margin-left: 25px;
    }
  }
`;
