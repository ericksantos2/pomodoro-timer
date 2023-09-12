import { styled } from 'styled-components';

const tamanho = '25vw';

export const TimerDiv = styled.div`
  --color: rgba(12, 169, 180, 0.5);
  align-items: center;
  aspect-ratio: 4 / 3;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: ${tamanho};
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

export const TimerConfigButton = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TimerDuracao = styled.ul`
  display: flex;

  button {
    background-color: transparent;
    border: none;
    color: var(--color);
    font-family: var(--font-family);
    padding: 0rem 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  li:first-child {
    border-right: 1px solid var(--color);
  }
`;

export const TimerTempo = styled.p`
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(12, 169, 180, 0.15);
  color: var(--color);
  font-size: 1.5rem;
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
  font-size: 1.75rem;

  &:hover {
    cursor: pointer;
  }
`;