async function busca() {
    const response = await fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL')

    return response.json()
}

busca().then(data => {
    const dados = data.USDBRL.ask;
    const name = data.USDBRL.name;
    const por = data.USDBRL.pctChange;
    const max = data.USDBRL.high;
    const min = data.USDBRL.low;

    const minredondo = parseFloat(min).toFixed(2);
    const maxredondo = parseFloat(max).toFixed(2);
    const dadoredondo= parseFloat(dados).toFixed(2);

    document.getElementById("valor").innerHTML = dadoredondo;
    document.getElementById("name").innerHTML = name;
    document.getElementById("por").innerHTML = por;
    document.getElementById("max").innerHTML = maxredondo;
    document.getElementById("min").innerHTML = minredondo;
})