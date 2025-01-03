import { useState } from 'react';

function Modal({ isVisible, onClose, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState({ nome: false, email: false, telefone: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      nome: !nome,
      email: !email,
      telefone: !telefone,
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      onSubmit({ nome, email, telefone });
      onClose(); // Fecha o modal após o envio bem-sucedido
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md z-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Preencha suas informações</h2>
        
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Nome</span>
            </div>
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)}
              className={`input input-bordered w-full ${errors.nome ? 'border-red-500 bg-red-100' : ''}`} 
            />
            {errors.nome && <span className="text-red-500 text-sm">O campo Nome é obrigatório.</span>}
          </label>
          
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">E-mail</span>
            </div>
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className={`input input-bordered w-full ${errors.email ? 'border-red-500 bg-red-100' : ''}`} 
            />
            {errors.email && <span className="text-red-500 text-sm">O campo E-mail é obrigatório.</span>}
          </label>
          
          <label className="form-control w-full mb-6">
            <div className="label">
              <span className="label-text">Telefone</span>
            </div>
            <input 
              type="tel" 
              placeholder="Digite seu telefone" 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)}
              className={`input input-bordered w-full ${errors.telefone ? 'border-red-500 bg-red-100' : ''}`} 
            />
            {errors.telefone && <span className="text-red-500 text-sm">O campo Telefone é obrigatório.</span>}
          </label>
          
          <div className="flex justify-end space-x-4">
            <button 
              type="button"
              onClick={onClose} 
              className="btn btn-secondary">
              Fechar
            </button>
            <button 
              type="submit"
              className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
