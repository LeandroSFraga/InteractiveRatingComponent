async function postAvaliation(body) {
    const conexao = await fetch("https://interactive-rating-component-f0os.onrender.com/avaliacao", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    localStorage.setItem("avaliation", body.avaliacao);
    localStorage.setItem("user", body.nome);

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


async function getAvaliations() {
    const conexao = await fetch("https://interactive-rating-component-f0os.onrender.com/avaliacao");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectApi = {
    postAvaliation,
    getAvaliations
}