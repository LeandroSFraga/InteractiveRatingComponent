import { conectApi } from "./conect.js";

const lista = document.querySelector("[table-avaliations]");

function createRow(nome, avaliacao) {
    if (!(nome && avaliacao)){
        return;
    }
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.append('td');
    tr.appendChild(td);
    tr.className = "table-row";
    tr.innerHTML = `<td>${nome}</td>
    <td>${avaliacao}</td>`;
    return tr;
}

async function listAPI() {
    const listAvaliations = await conectApi.getAvaliations();
    const arrayAvaliations = Object.values(listAvaliations.results);
    console.log(arrayAvaliations);
    arrayAvaliations.forEach(element => lista.appendChild(createRow(element.nomeUsuario, element.avaliacao)));
}

listAPI();