let choosedValue;
let userName;

localStorage.setItem("user", '');
localStorage.setItem("avaliation", 0);
document.getElementById("rating-form").onsubmit = (event) => {
    event.preventDefault();
    const radios = document.getElementsByName("nota");
    const choosedRadio = Array.from(radios).find(value => value.checked);
    choosedValue = choosedRadio.value;
    userName = document.getElementById("name").value;
    localStorage.setItem("avaliation", choosedValue);
    localStorage.setItem("user", userName);
    history.pushState({}, '', '/submited.html');
    location.reload();
}

