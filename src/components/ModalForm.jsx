import { useState, useEffect } from 'react';
import Select from 'react-select';

// Opções para os países com bandeiras
const countryOptions = [
  { value: '+55', label: 'Brazil', flag: '🇧🇷' },
  { value: '+1', label: 'United States', flag: '🇺🇸' },
  { value: '+44', label: 'United Kingdom', flag: '🇬🇧' },
  { value: '+1', label: 'Canada', flag: '🇨🇦' },
  { value: '+258', label: 'Mozambique', flag: '🇲🇿' },
  { value: '+351', label: 'Portugal', flag: '🇵🇹' },
  { value: '+81', label: 'Japan', flag: '🇯🇵' },
  { value: '+238', label: 'Cape Verde', flag: '🇨🇻' },
  { value: '+999', label: 'World', flag: '🌍' },
];

function ModalForm({ onClose }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [codigoPais, setCodigoPais] = useState(countryOptions[0]);

  // Carregar dados do LocalStorage
  useEffect(() => {
    const savedNome = localStorage.getItem('form_nome');
    const savedEmail = localStorage.getItem('form_email');
    const savedTelefone = localStorage.getItem('form_telefone');
    const savedCodigoPais = localStorage.getItem('form_codigoPais');

    if (savedNome) setNome(savedNome);
    if (savedEmail) setEmail(savedEmail);
    if (savedTelefone) setTelefone(savedTelefone);
    if (savedCodigoPais) {
      const pais = countryOptions.find((option) => option.value === savedCodigoPais);
      if (pais) setCodigoPais(pais);
    }
  }, []);

  // Salvar no LocalStorage
  useEffect(() => {
    localStorage.setItem('form_nome', nome);
  }, [nome]);

  useEffect(() => {
    localStorage.setItem('form_email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('form_telefone', telefone);
  }, [telefone]);

  useEffect(() => {
    localStorage.setItem('form_codigoPais', codigoPais.value);
  }, [codigoPais]);

  // Formatar Telefone
  const formatarTelefone = (valor) => {
    let telefoneFormatado = valor.replace(/\D/g, '');

    if (codigoPais.value === '+55') {
      if (telefoneFormatado.length <= 2) {
        return `(${telefoneFormatado}`;
      }
      if (telefoneFormatado.length <= 6) {
        return `(${telefoneFormatado.slice(0, 2)}) ${telefoneFormatado.slice(2)}`;
      }
      if (telefoneFormatado.length === 10) {
        return `(${telefoneFormatado.slice(0, 2)}) ${telefoneFormatado.slice(2, 6)}-${telefoneFormatado.slice(6)}`;
      }
      return `(${telefoneFormatado.slice(0, 2)}) ${telefoneFormatado.slice(2, 7)}-${telefoneFormatado.slice(7, 11)}`;
    } else {
      // Internacional
      return `+${telefoneFormatado}`;
    }
  };

  const handleTelefoneChange = (e) => {
    const valor = e.target.value;
    setTelefone(formatarTelefone(valor));
  };

  const handleCodigoPaisChange = (selectedOption) => {
    setCodigoPais(selectedOption);
    setTelefone('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && telefone) {
      // Salva no localStorage
      localStorage.setItem('form_nome', nome);
      localStorage.setItem('form_email', email);
      localStorage.setItem('form_telefone', telefone);
      localStorage.setItem('form_codigoPais', codigoPais.value);

      // Redireciona para o resultado
      window.location.href = 'http://localhost:5173/?show=answer';
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-50">
        <h2 className="text-xl font-bold mb-4">Seus Dados Pessoais</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          
          {/* Telefone com Bandeira */}
          <div className="flex gap-2 items-center">
            <div className="w-2/3">
              <Select
                options={countryOptions}
                value={codigoPais}
                onChange={handleCodigoPaisChange}
                getOptionLabel={(e) => (
                  <div className="flex items-center gap-2">
                    <span>{e.label} ({e.value})</span>
                  </div>
                )}
                classNamePrefix="select"
              />
            </div>
            <input
              type="text"
              placeholder={codigoPais.value === '+55' ? "(11) 91234-5678" : "+1 123-456-7890"}
              value={telefone}
              onChange={handleTelefoneChange}
              className="input input-bordered w-2/3"
              required
            />
          </div>

          {/* Botões */}
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
