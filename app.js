function pesquisar(campoPesquisa = "") {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Se campoPesquisa estiver vazio, tenta buscar no campo de pesquisa
    if (!campoPesquisa) {
        campoPesquisa = document.getElementById("campo-pesquisa").value;
    }

    if (!campoPesquisa) {
        section.innerHTML = "<img src='Material/digiteAlgo.jpg'>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let trofeu of listaDeTrofeus) {
        titulo = trofeu.titulo.toLowerCase();
        descricao = trofeu.descricao.toLowerCase();
        // Verifica se o título ou a descrição incluem o campo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">   
                    <img src="${trofeu.img}">
                    <p>${trofeu.descricao}</p>
                    <img src="${trofeu.maps}">
                    <p>${trofeu.dicas}</p>
                    <div>
                        <iframe width="560" height="315" src="${trofeu.linkYoutube}"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p><i>${trofeu.criador}</i></p>
                </div>
            `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<img src='Material/kratosTriste.jpg'>";
        return;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
