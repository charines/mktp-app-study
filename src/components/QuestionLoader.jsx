import { useEffect, useState } from 'react';
import perguntas from '../data/perguntas.json';

function QuestionLoader({ onQuestionsLoaded }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(perguntas);
    onQuestionsLoaded(perguntas); // Envia as perguntas para o componente pai
  }, []);

  return null; // Este componente apenas carrega os dados
}

export default QuestionLoader;
