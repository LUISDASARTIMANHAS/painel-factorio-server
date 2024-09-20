document.addEventListener("DOMContentLoaded", function() {
  // Simulação de dados de servidor
  const servers = [
    { id: 1, name: "Server 1", status: "Online" },
    { id: 2, name: "Server 2", status: "Offline" },
    { id: 3, name: "Server 3", status: "Online" }
  ];

  // Preenche a lista de servidores no dashboard
  const serverList = document.getElementById("serverList");
  servers.forEach(server => {
    const li = document.createElement("li");
    li.textContent = `${server.name} - ${server.status}`;
    li.dataset.id = server.id;
    li.addEventListener("click", () => showServerDetails(server.id));
    serverList.appendChild(li);
  });

  // Exibe detalhes do servidor selecionado
  function showServerDetails(serverId) {
    const server = servers.find(s => s.id === serverId);
    const serverDetails = document.getElementById("serverDetails");
    serverDetails.innerHTML = `
      <p>Name: ${server.name}</p>
      <p>Status: ${server.status}</p>
      <!-- Adicione mais detalhes aqui -->
    `;
  }
});