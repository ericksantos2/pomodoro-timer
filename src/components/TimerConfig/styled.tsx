import { styled } from 'styled-components';

export const TimerConfigBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const TimerConfigForm = styled.form`
  align-items: center;
  aspect-ratio: 3 / 4;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  position: relative;
  width: 20vw;

  > span {
    position: absolute;
    right: 1rem;
    top: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      font-family: var(--font-family);
      height: 1rem;
      padding: 0.3rem 0.6rem;
      width: 5vw;
    }
  }

  > button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: var(--font-family);
    font-size: 16px;
    margin-top: 5px;
    width: 10vw;

    &:hover {
      cursor: pointer;
    }
  }
`;
