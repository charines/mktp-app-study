export const sendFormDataToServer = async (formData) => {
  const url = "https://dsop.com.br/servicos/rdstation/SendToRd.php";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar os dados: ${response.statusText}`);
    }

    const result = await response.text(); // Caso o servidor retorne texto
    console.log("Dados enviados com sucesso:", result);
    return result;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
