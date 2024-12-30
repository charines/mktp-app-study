import { useState } from 'react';

function ModalForm({ onClose, onCalcular }) {
  const [nome, setNome] = useState('nome');
  const [email, setEmail] = useState('n@c.m');
  const [telefone, setTelefone] = useState('55 11 12345 6789');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && telefone) {
      onCalcular({ nome, email, telefone });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-50">
        <h2 className="text-xl font-bold mb-4">Seus Dados Pessoais</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Enviar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary w-full mt-2"
          >
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
