# 📑 **Documentação de Requisitos - Sistema de Questionário com Perfis de Empreendedor e Competências**

## 📚 **1. Introdução**
O sistema de questionário tem como objetivo identificar o perfil de empreendedor do usuário com base em suas respostas e mapear as competências associadas ao perfil dominante. Além disso, exibe a distribuição das respostas para cada perfil.

---

## 🛠️ **2. Componentes do Sistema**

### **2.1 Questionário**
**Objetivo:** Permitir que o usuário responda a um conjunto de perguntas para determinar seu perfil dominante.

**Funcionalidades:**
- Exibir perguntas e respostas múltiplas.
- Capturar e armazenar respostas.
- Rolagem automática para a próxima pergunta após a seleção de uma resposta.
- Exibir botão para enviar respostas.

**Entrada:**
- Lista de perguntas e respostas.

**Saída:**
- Objeto com respostas do usuário.

**Exemplo:**
```json
{
  "PO": 2,
  "AT": 3,
  "AI": 3
}
```

---

### **2.2 Resultado**
**Objetivo:** Apresentar o perfil dominante do usuário, as competências associadas e a distribuição dos perfis.

**Funcionalidades:**
- Calcular o perfil dominante com base nas respostas.
- Mapear competências associadas ao perfil.
- Exibir descrição do perfil dominante.
- Mostrar lista de competências com checkboxes.
- Apresentar a distribuição de respostas por perfil.

**Entrada:**
- Objeto com respostas do usuário.

**Saída:**
- Perfil dominante.
- Competências associadas.
- Distribuição de respostas.

**Exemplo de Saída:**
```
Perfil Dominante: AI
Descrição: Inova em atividades tradicionais ou não. Ousa, independente dos riscos...

Competências Associadas:
- Liderança: ✔
- Autopersuasão: ✔
- Sonhos: ✔
- Resiliência: ✔

Distribuição de Perfis:
- AT: 3
- AI: 3
- PO: 2
```

---

## 🧪 **3. Testes**

### **3.1 Teste do Questionário**
- **Cenário 1:** O usuário seleciona respostas válidas para todas as perguntas.
  - **Resultado esperado:** As respostas são armazenadas corretamente e exibidas ao final.

- **Cenário 2:** O usuário não seleciona nenhuma resposta.
  - **Resultado esperado:** O sistema exibe um alerta solicitando que o usuário responda às perguntas.

- **Cenário 3:** O usuário seleciona respostas parcialmente.
  - **Resultado esperado:** O sistema notifica que há perguntas não respondidas.

### **3.2 Teste do Resultado**
- **Cenário 1:** As respostas resultam em um perfil dominante claro.
  - **Resultado esperado:** O perfil dominante correto é exibido, juntamente com suas competências.

- **Cenário 2:** As respostas têm distribuição equilibrada.
  - **Resultado esperado:** O sistema seleciona um perfil com base em critérios pré-definidos.

- **Cenário 3:** Todas as competências são exibidas corretamente.
  - **Resultado esperado:** Cada competência associada ao perfil dominante é exibida corretamente.

---

## 📊 **4. Resultado Esperado por Componente**

### **4.1 Resultado Esperado para Questionário**
- Respostas capturadas corretamente.
- Rolagem automática entre perguntas.
- Botão de envio funcional.

### **4.2 Resultado Esperado para Resultado Final**
- Perfil dominante exibido com título e descrição.
- Competências associadas exibidas em formato de lista.
- Distribuição de respostas exibida corretamente.

**Exemplo Final:**
```
Perfil: AI
Competências Associadas:
- Liderança: ✔
- Autopersuasão: ✔
- Otimismo: ✔
Distribuição:
- AT: 3
- AI: 3
- PO: 2
```

---

## 📑 **5. Conclusão**
O sistema atende ao requisito principal de identificar o perfil dominante com base nas respostas, exibir competências associadas de maneira clara e apresentar uma distribuição visual e textual das respostas. Testes garantem que todas as funcionalidades operem corretamente e o usuário tenha uma experiência intuitiva.

---

## 📄 **6. Referências**
- Documentação React.
- Boas práticas de UI/UX.
- Estratégias de coleta e análise de dados.

---

**Versão:** 1.0  
**Data:** 2024-06-10  
**Autor:** Equipe de Desenvolvimento

---

*Documento de requisitos para implementação e validação do sistema de questionário com perfil de empreendedor e competências.*
