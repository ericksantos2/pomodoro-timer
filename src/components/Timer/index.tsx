import { useEffect, useState } from 'react';
import {
  TimerBotao,
  TimerConfigButton,
  TimerDiv,
  TimerDuracao,
  TimerTempo,
} from './styled';
import configJson from '../../jsons/config.json';
import { LuSettings2 } from 'react-icons/lu';
import { TimerConfig } from '../TimerConfig';
import pomodoroEnd from '/assets/pomodoro-end.mp3';

let estadoAtual: 'foco' | 'descanso' = 'foco';

export default function TimerComponent() {
  const [config, setConfig] = useState(configJson);
  const [segundosFaltando, setSegundosFaltando] = useState(config.foco);
  const [estaPausado, setEstaPausado] = useState(true);
  const [configOpen, setConfigOpen] = useState(false);

  function togglePause() {
    estaPausado
      ? segundosFaltando > 0 && setEstaPausado(false)
      : setEstaPausado(true);
  }

  function terminaTimer() {
    setTimeout(() => {
      togglePause();
      if (estadoAtual === 'foco') {
        setSegundosFaltando(config.descanso);
        estadoAtual = 'descanso';
      } else if (estadoAtual === 'descanso') {
        setSegundosFaltando(config.foco);
        estadoAtual = 'foco';
      }
    }, 1000);
    const audio = new Audio(pomodoroEnd);
    audio.play();
  }

  function segundosParaHoras(tempo: number) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60) + (horas * 60);
    const segundos = (tempo % 3600) % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${
      segundos < 10 ? '0' : ''
    }${segundos}`;
  }

  const handleDuracao = (botao: 'foco' | 'descanso') => () => {
    setEstaPausado(true);
    estadoAtual = botao;
    botao === 'foco'
      ? setSegundosFaltando(config.foco)
      : setSegundosFaltando(config.descanso);
  };

  useEffect(() => {
    if (segundosFaltando === 0 && !estaPausado) {
      terminaTimer();
    }
    const interval = setInterval(() => {
      !estaPausado &&
        segundosFaltando > 0 &&
        setSegundosFaltando(segundosFaltando - 1);
    }, 1000);
    return () => {
      interval && clearInterval(interval);
    };
  }, [segundosFaltando, estaPausado]);

  useEffect(() => {
    document.title = `${segundosParaHoras(segundosFaltando)} - ${estadoAtual === 'descanso' ? 'Descanso' : 'Foco'} | Pomodoro`;
  }, [segundosFaltando]);

  useEffect(() => {
    setSegundosFaltando(config[estadoAtual]);
  }, [config])

  return (
    <TimerDiv>
      <TimerConfigButton onClick={() => setConfigOpen(true)}>
        <LuSettings2 color='rgba(12, 169, 180, 0.5)' />
      </TimerConfigButton>
      <TimerConfig enable={configOpen} setOpen={setConfigOpen} setConfig={setConfig} />
      <TimerDuracao>
        <li>
          <button onClick={handleDuracao('descanso')} style={{textDecoration: estadoAtual === 'descanso' ? 'underline' : 'none'}}>Descanso</button>
        </li>
        <li>
          <button onClick={handleDuracao('foco')} style={{textDecoration: estadoAtual === 'descanso' ? 'none' : 'underline'}}>Foco</button>
        </li>
      </TimerDuracao>
      <TimerTempo>{segundosParaHoras(segundosFaltando)}</TimerTempo>
      <TimerBotao onClick={togglePause} type='submit'>
        {estaPausado ? 'Iniciar' : 'Pausar'}
      </TimerBotao>
    </TimerDiv>
  );
}
