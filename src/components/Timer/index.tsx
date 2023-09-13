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
  const [tempoFaltando, setTempoFaltando] = useState(config.foco * 1000);
  const [estaPausado, setEstaPausado] = useState(true);
  const [configOpen, setConfigOpen] = useState(false);

  function togglePause() {
    estaPausado
      ? Math.floor(tempoFaltando) > 0 && setEstaPausado(false)
      : setEstaPausado(true);
  }

  function terminaTimer() {
    setTimeout(() => {
      togglePause();
      if (estadoAtual === 'foco') {
        setTempoFaltando(config.descanso * 1000);
        estadoAtual = 'descanso';
      } else if (estadoAtual === 'descanso') {
        setTempoFaltando(config.foco * 1000);
        estadoAtual = 'foco';
      }
    }, 1000);
    const audio = new Audio(pomodoroEnd);
    audio.play();
  }

  function segundosParaHoras(tempo: number) {
    const novoTempo = Math.floor(tempo / 1000);
    const horas = Math.floor(novoTempo / 3600);
    const minutos = Math.floor((novoTempo % 3600) / 60) + (horas * 60);
    const segundos = (novoTempo % 3600) % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${
      segundos < 10 ? '0' : ''
    }${segundos}`;
  }

  const handleDuracao = (botao: 'foco' | 'descanso') => () => {
    setEstaPausado(true);
    estadoAtual = botao;
    botao === 'foco'
      ? setTempoFaltando(config.foco * 1000)
      : setTempoFaltando(config.descanso * 1000);
  };

  useEffect(() => {
    if (Math.floor(tempoFaltando / 1000) <= 0 && !estaPausado) {
      return terminaTimer();
    }
    const tempoInicial = new Date();
    const interval = setInterval(() => {
      const tempoSubtracao = new Date().getTime() - tempoInicial.getTime();
      !estaPausado &&
        Math.floor(tempoFaltando / 1000) > 0 &&
        setTempoFaltando(tempoFaltando - tempoSubtracao);
    }, 500);
    return () => {
      interval && clearInterval(interval);
    };
  }, [tempoFaltando, estaPausado]);

  useEffect(() => {
    document.title = `${segundosParaHoras(tempoFaltando)} - ${estadoAtual === 'descanso' ? 'Descanso' : 'Foco'} | Pomodoro`;
  }, [tempoFaltando]);

  useEffect(() => {
    setTempoFaltando(config[estadoAtual] * 1000);
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
      <TimerTempo>{segundosParaHoras(tempoFaltando)}</TimerTempo>
      <TimerBotao onClick={togglePause} type='submit'>
        {estaPausado ? 'Iniciar' : 'Pausar'}
      </TimerBotao>
    </TimerDiv>
  );
}
