import { useState } from 'react';

function Questionario({ questions, onAnswersSubmitted }) {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (grupo, resposta) => {
    setAnswers((prev) => ({ ...prev, [grupo]: resposta }));
  };

  const handleSubmit = () => {
    onAnswersSubmitted(answers);
  };

  return (
    <section className="py-8 bg-black text-white" id="questionario">
      <h2 className="text-3xl font-bold text-center mb-6">Inicie seu questionário</h2>
      {questions.map((question, index) => (
        <div key={question.grupo} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">{question.pergunta}</h3>
          <ul className="space-y-4">
            {question.respostas.map((resposta, i) => (
              <li
                key={i}
                className={`border border-green-500 rounded-lg p-4 cursor-pointer hover:bg-green-500 hover:text-black transition-all ${answers[question.grupo] === resposta.perfil ? 'bg-green-500 text-black' : ''}`}
                onClick={() => handleAnswerChange(question.grupo, resposta.perfil)}
              >
                <span className="font-bold text-green-400 mr-2">{String.fromCharCode(65 + i)}</span>
                {resposta.texto}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <button onClick={handleSubmit} className="btn btn-primary text-black bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600">
          Enviar Respostas
        </button>
      </div>
    </section>
  );
}

export default Questionario;
