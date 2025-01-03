import { useState, useRef } from 'react';

function Questionario({ questions, onAnswersSubmitted }) {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
  const questionRefs = useRef([]);

  // Manipula a mudança de resposta
  const handleAnswerChange = (grupo, resposta, index) => {
    setAnswers((prev) => ({ ...prev, [grupo]: resposta }));
    setError(null); // Remove mensagem de erro após uma resposta válida

    // Ir para a próxima pergunta (se existir)
    const nextIndex = index + 1;
    if (questionRefs.current[nextIndex]) {
      questionRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Valida se todas as perguntas foram respondidas
  const validateAnswers = () => {
    for (const question of questions) {
      if (!answers[question.grupo]) {
        return question.pergunta; // Retorna a pergunta não respondida
      }
    }
    return null;
  };

  // Manipula o envio das respostas
  const handleSubmit = () => {
    const invalidQuestion = validateAnswers();
    if (invalidQuestion) {
      setError(`Por favor, responda à pergunta: "${invalidQuestion}"`);
      return;
    }

    onAnswersSubmitted(answers);
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-gray-900 text-white" id="questionario">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Inicie seu Questionário
      </h2>
      <div className="space-y-8">
        {questions.map((question, index) => (
          <div
            key={question.grupo}
            className="mb-6 md:mb-8"
            ref={(el) => (questionRefs.current[index] = el)}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              {question.pergunta}
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {question.respostas.map((resposta, i) => (
                <li
                  key={i}
                  className={`border border-green-500 rounded-lg p-3 md:p-4 cursor-pointer text-sm md:text-base hover:bg-green-500 hover:text-black transition-all ${
                    answers[question.grupo] === resposta.perfil
                      ? 'bg-green-500 text-black'
                      : ''
                  }`}
                  onClick={() => handleAnswerChange(question.grupo, resposta.perfil, index)}
                >
                  <span className="font-bold text-green-400 mr-2">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {resposta.texto}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mensagem de Erro */}
      {error && (
        <div className="mt-4 text-center text-red-500 font-semibold">
          {error}
        </div>
      )}

      {/* Botão de Envio */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-full md:w-auto text-black bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all"
        >
          Enviar Respostas
        </button>
      </div>
    </section>
  );
}

export default Questionario;
