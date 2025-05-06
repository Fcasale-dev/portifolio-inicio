async function loadProjects() {
    try {
        // Fazendo a requisição para o arquivo JSON
        const response = await fetch("json/projects.json");
        const projects = await response.json();

        // Pegando a referência do container onde os projetos vão ser carregados
        const projectsContainer = document.getElementById("projectsContainer");

        // Iterando sobre os projetos e criando os elementos no DOM
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("pbox", "tilt", project.category);

            // Montando o conteúdo HTML do projeto
            projectElement.innerHTML = `
                <img draggable="false" src="${project.image}" alt="${project.name}" />
                <div class="pcontent">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.description}</p>
                        <div class="pbtns">
                            <a href="${project.live}" class="pbtn" target="_blank">
                                <i class="fas fa-eye"></i> 
                            </a>
                            <a href="${project.code}" class="pbtn" target="_blank">
                                <i class="fas fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            // Adicionando o projeto ao container
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);
    }
}

// Chama a função para carregar os projetos quando a página carregar
loadProjects();
