import { useState } from 'react';
import Secao1 from './components/Secao1';
import QuestionLoader from './components/QuestionLoader';
import Questionario from './components/Questionario';
import Modal from './components/Modal';
import Resultado from './components/Resultado';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(null); // Respostas do Questionário
  const [isModalVisible, setModalVisible] = useState(false); // Controle do Modal
  const [userInfo, setUserInfo] = useState(null); // Dados do Usuário
  const [isQuestionarioVisible, setQuestionarioVisible] = useState(true); // Controle do Questionário

  const handleAnswersSubmitted = (ans) => {
    setAnswers(ans); // Define as respostas
    setModalVisible(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleModalSubmit = (info) => {
    setUserInfo(info); // Define informações do usuário
    setModalVisible(false); // Fecha o modal
    setQuestionarioVisible(false); // Esconde o Questionário
  };

  return (
    <div>
      <Secao1 onShowQuestionnaire={() => setQuestionarioVisible(true)} />
      <QuestionLoader onQuestionsLoaded={setQuestions} />
      
      {questions.length > 0 && isQuestionarioVisible && (
        <Questionario 
          questions={questions} 
          onAnswersSubmitted={handleAnswersSubmitted} 
        />
      )}
      
      <Modal 
        isVisible={isModalVisible} 
        onClose={handleCloseModal} 
        onSubmit={handleModalSubmit} 
      />
      
      {userInfo && answers && !isQuestionarioVisible && (
        <Resultado answers={answers} />
      )}
    </div>
  );
}

export default App;
