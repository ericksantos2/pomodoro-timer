import { useState } from 'react';
import { TimerConfigBackground, TimerConfigForm } from './styled';
import { GrFormClose } from 'react-icons/gr';

// eu sei que um componente não deve depender de outro, mas só fiz isso para diminuir a quantidade de linhas de cada arquivo, não existe esse componente sem o timer

export function TimerConfig({
  enable,
  setOpen,
  setConfig,
}: {
  enable: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  setConfig: (
    value: React.SetStateAction<{
      descanso: number;
      foco: number;
    }>
  ) => void;
}) {
  const [tempoCurto, setTempoCurto] = useState(0);
  const [tempoLongo, setTempoLongo] = useState(0);

  const handleChange = (set: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    set(Number(e.target.value));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOpen(false);
    let newConfig: { foco?: number; descanso?: number } = {};
    tempoCurto > 0 && (newConfig.descanso = tempoCurto * 60);
    tempoLongo > 0 && (newConfig.foco = tempoLongo * 60);
    setConfig(configAtual => ({...configAtual, ...newConfig}));
  }

  return (
    <TimerConfigBackground style={{ display: enable ? 'flex' : 'none' }}>
      <TimerConfigForm onSubmit={handleSubmit}>
        <span
          onClick={() => {
            setOpen(false);
          }}
        >
          <GrFormClose />
        </span>
        <div>
          <label htmlFor='config__tempo__curto'>Tempo curto:</label>
          <input type='number' min='0' max='99' id='config__tempo__curto' value={tempoCurto} onChange={handleChange(setTempoCurto)} />
        </div>
        <div>
          <label htmlFor='config__tempo__longo'>Tempo longo:</label>
          <input type='number' min='0' max='99' id='config__tempo__longo' value={tempoLongo} onChange={handleChange(setTempoLongo)} />
        </div>
        <button>Salvar</button>
      </TimerConfigForm>
    </TimerConfigBackground>
  );
}
