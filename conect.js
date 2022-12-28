const apiOne = "https://interactive-rating-component-f0os.onrender.com/avaliacao";
const apiTwoPost = "https://interactive-rating-api.onrender.com/rating";
const apiTwo = "https://interactive-rating-api.onrender.com/getRanking";


async function postAvaliation(body) {
    const conexao = await fetch(apiOne, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    // ApiOne
    localStorage.setItem("avaliation", body.avaliacao);
    localStorage.setItem("user", body.nome);

    //ApiTwo
    // localStorage.setItem("avaliation", body.value);
    // localStorage.setItem("user", body.name);

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


async function getAvaliations() {
    const conexao = await fetch(apiOne);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectApi = {
    postAvaliation,
    getAvaliations
}