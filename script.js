import { conectApi } from "./conect.js";

localStorage.setItem("user", '');
localStorage.setItem("avaliation", 0);


// SUBMIT
const formulario = document.querySelector("[data-form]");
const botao = document.querySelector("[btn-submit]");

async function submitAvaliation(event) {
    event.preventDefault();
    botao.classList.add("submit-loading");
    const name = document.querySelector("[data-name]").value;
    const avaliation = valueAvaliation();

    // -- ApiTwo
    const body = {
        "nome": name,
        "avaliacao": Number(avaliation)
    }

    // -- ApiOne
    // const body = {
    //     "name": name,
    //     "value": Number(avaliation)
    // }


    await conectApi.postAvaliation(body);
    botao.classList.remove("submit-loading");
    window.location.href = "/submited.html";
}


function valueAvaliation() {
    const radios = document.getElementsByName("nota");
    const choosedRadio = Array.from(radios).find(value => value.checked);
    return choosedRadio.value;
}

formulario.addEventListener("submit", event => submitAvaliation(event));

