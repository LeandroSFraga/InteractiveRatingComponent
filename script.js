let choosedValue;
localStorage.setItem("avaliation", 0)
const valor = document.getElementById("btn-submit").onclick = () => {
    const radios = document.getElementsByName("nota");
    const choosedRadio = Array.from(radios).find(value => value.checked);
    choosedValue = choosedRadio.value;
    localStorage.setItem("avaliation", choosedValue);
}

