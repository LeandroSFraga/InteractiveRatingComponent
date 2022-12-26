import { conectApi } from "./conect.js";

localStorage.setItem("user", '');
localStorage.setItem("avaliation", 0);


// SUBMIT
const formulario = document.querySelector("[data-form]")

async function submitAvaliation(event) {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const avaliation = valueAvaliation();

    const body = {
        "nome": name,
        "avaliacao": avaliation
    }

    console.log(body);
    await conectApi.postAvaliation(body);
    window.location.href = "/submited.html";
}


function valueAvaliation() {
    const radios = document.getElementsByName("nota");
    const choosedRadio = Array.from(radios).find(value => value.checked);
    return choosedRadio.value;
}

formulario.addEventListener("submit", event => submitAvaliation(event));

