function buscaAPI(url) {
    let produto = fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`)

    produto.then(response => {
        response.json()
            .then(resultado => { return resultado })
    })
}