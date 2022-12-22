let choosedValue;

const valor = document.getElementById("btn-submit").onclick = () =>  { 
    const radios =  document.getElementsByName("nota");
    const choosedRadio = radios.find( (value) => value.checked );
    choosedValue = choosedRadio.value;
}

document.getElementById("valor_escolhido").innerHTML = choosedValue;

