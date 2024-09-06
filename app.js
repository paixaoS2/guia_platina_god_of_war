function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let trofeu of listaDeTrofeus ){
        titulo = trofeu.titulo.toLowerCase()
        descricao = trofeu.descricao.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">   
                    <img src=${trofeu.img}>
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

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    
}