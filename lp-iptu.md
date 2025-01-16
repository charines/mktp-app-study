# LP-IPTU: Simulador de Cálculo de IPTU

## Descrição Geral
Este é um projeto para a criação de uma landing page interativa chamada **LP-IPTU**, que oferece um simulador detalhado para ajudar os usuários a decidirem a melhor forma de pagar o Imposto sobre Propriedade de Veículos Automotores (IPTU). A solução apresenta comparações entre opções de pagamento à vista e parcelado, levando em consideração fatores como taxas de desconto e juros.

## Objetivo
Proporcionar uma experiência educativa e interativa, permitindo ao usuário calcular o impacto financeiro de diferentes opções de pagamento e entender qual delas é mais vantajosa com base nos seus dados pessoais.

## Tecnologias Utilizadas
- **React.js**: Biblioteca principal para criação de componentes interativos.
- **Tailwind CSS**: Framework de estilização para layout responsivo e design moderno.
- **LocalStorage**: Utilizado para armazenar temporariamente os dados do usuário.
- **Google reCAPTCHA**: Proteção contra spam e bots.

## Estrutura de Componentes

### 1. **App.jsx**
- Arquivo principal que organiza os componentes e gerencia o estado global da aplicação.
- Carrega os dados do `localStorage` e controla a exibição do resultado do simulador.

### 2. **Secao1.jsx**
- Apresentação inicial do simulador, com botões para acessar o formulário e obter mais informações sobre o IPTU.

### 3. **Formulario.jsx**
- Formulário interativo para coleta de dados do usuário, como:
  - Valor do IPTU
  - Percentual de desconto à vista
  - Taxa de juros mensal
  - Número de parcelas
- Integração com o reCAPTCHA.

### 4. **ModalForm.jsx**
- Modal para coleta de informações pessoais do usuário (nome, e-mail, cidade e estado) antes de realizar o cálculo final.

### 5. **Resultado.jsx**
- Exibe os resultados do cálculo de maneira detalhada.
- Contém seções para comparação de:
  - Pagamento à vista com desconto.
  - Pagamento parcelado com rendimentos mensais do saldo remanescente.

### 6. **AnaliseInvestimento.jsx**
- Fornece uma análise detalhada e recomendação com base nos dados fornecidos.

### 7. **Componentes de Cálculo**
- **InvestimentoComParcelas.jsx**: Calcula o rendimento do saldo remanescente em caso de pagamento parcelado.
- **InvestimentoDesconto.jsx**: Simula o rendimento do desconto investido no pagamento à vista.
- **RacionalInvestimentoComParcelas.jsx**: Exibe um resumo detalhado do raciocínio de investimento para o pagamento parcelado.
- **RacionalInvestimentoDesconto.jsx**: Mostra os detalhes do cálculo de investimento no pagamento à vista.

### 8. **Ofertas.jsx**
- Apresenta cupons e descontos em produtos relacionados, como livros e cursos de educação financeira.

### 9. **EntendaMais.jsx**
- Seção educativa com vídeos e conteúdos explicativos sobre a gestão financeira do IPTU.

### 10. **Rodape.jsx**
- Contém links para redes sociais da empresa e mensagens de despedida.

### 11. **Header.jsx**
- Barra de navegação responsiva com links para seções principais da aplicação.

## Como Usar
1. **Configuração Inicial**:
   - Instale as dependências do projeto com `npm install`.
   - Configure as variáveis de ambiente no arquivo `.env`.
   - Inicie o servidor local com `npm start`.

2. **Simulação**:
   - Preencha o formulário inicial com os dados do IPTU.
   - Insira os dados pessoais no modal que será exibido.
   - Veja os resultados detalhados e escolha a melhor opção de pagamento.

3. **Exploração Adicional**:
   - Acesse as ofertas para descontos em produtos educativos.
   - Assista ao vídeo explicativo para entender mais sobre IPTU.

## Funcionalidades Futuras
- Integração com APIs financeiras para cálculos mais precisos.
- Exportação dos resultados em PDF.
- Notificações por e-mail com os resultados da simulação.

## Contato
Para mais informações, entre em contato com a equipe DSOP:
- **E-mail**: charles.rodrigues@dsop.com.br


Agradecemos por utilizar o **LP-IPTU**! 💡

