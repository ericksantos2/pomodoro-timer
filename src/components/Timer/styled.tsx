import { styled } from 'styled-components';

export const TimerDiv = styled.div`
  --color: rgba(12, 169, 180, 0.5);
  align-items: center;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 25vw;
  justify-content: center;
  min-height: 40vh;
  min-width: 280px;
  padding: 2rem;
  position: relative;
  width: 25vw;

  @media screen and (min-width: 0px) and (max-width: 767px) {
    height: 80vw;
    max-height: 450px;
    max-width: 450px;
    width: 80vw;
  }
`;

export const TimerConfigButton = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  > svg {
    --tamanho-svg: 20px;
    height: var(--tamanho-svg);
    width: var(--tamanho-svg);
  }
`;

export const TimerDuracao = styled.ul`
  display: flex;

  button {
    background-color: transparent;
    border: none;
    color: var(--color);
    font-family: var(--font-family);
    font-size: 18px;
    padding: 0rem 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TimerTempo = styled.p`
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(12, 169, 180, 0.15);
  color: var(--color);
  font-size: 2.75rem;
  font-weight: 300;
  padding: 0.33rem;
`;

export const TimerBotao = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(12, 169, 180, 0.15);
  color: var(--color);
  font-family: var(--font-family);
  font-size: 2.75rem;

  &:hover {
    cursor: pointer;
  }
`;
