document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const data = {
      email: email
    };

    fetch("https://64e6a1b009e64530d1801bde.mockapi.io/api/vl/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 201) { // Código 201 indica sucesso na criação
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("email").value = "";
      } else {
        console.error("Erro ao enviar dados para a API");
      }
    })
    .catch(error => {
      console.error("Erro ao processar a requisição:", error);
    });
  });