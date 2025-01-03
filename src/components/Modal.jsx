import { useState } from 'react';

function Modal({ isVisible, onClose, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState({ nome: false, email: false, telefone: false });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateTelefone = (telefone) => {
    return /^\d{10,11}$/.test(telefone); // Valida telefone com 10 ou 11 dígitos
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      nome: !nome,
      email: !email || !validateEmail(email),
      telefone: !telefone || !validateTelefone(telefone),
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Preencha suas informações
        </h2>
        
        <form onSubmit={handleSubmit} noValidate>
          {/* Campo Nome */}
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
          
          {/* Campo E-mail */}
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
            {errors.email && <span className="text-red-500 text-sm">Digite um e-mail válido.</span>}
          </label>
          
          {/* Campo Telefone */}
          <label className="form-control w-full mb-6">
            <div className="label">
              <span className="label-text">Telefone</span>
            </div>
            <input 
              type="tel" 
              placeholder="Digite seu telefone (Apenas números)" 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)}
              className={`input input-bordered w-full ${errors.telefone ? 'border-red-500 bg-red-100' : ''}`} 
            />
            {errors.telefone && <span className="text-red-500 text-sm">Digite um telefone válido (10 ou 11 dígitos).</span>}
          </label>
          
          {/* Botões */}
          <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
            <button 
              type="button"
              onClick={onClose} 
              className="btn btn-secondary w-full md:w-auto">
              Fechar
            </button>
            <button 
              type="submit"
              className="btn btn-primary w-full md:w-auto">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
