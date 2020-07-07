fabricaNomes = (nome) => {
    let count = 0
    return {
        seq: () => count++,
        nome, // VEJA QUE NEM PRECISEI DE USAR O NOME DO ATRIBUTO!
        type: 'humano',
    }
}

    const novo_tulio = fabricaNomes('tulio')
    const novo_jao = fabricaNomes('jao')

    console.log(novo_jao)
    console.log(`${novo_tulio.seq()} novo_tulio seq, ${novo_tulio.nome}`)
    console.log(`${novo_tulio.seq()} novo_tulio seq, ${novo_tulio.nome}`)

//    console.log(`${novo_jao.seq()} novo_jao seq, ${novo_jao.nome}`)