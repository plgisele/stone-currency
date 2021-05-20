// Importando API como objeto
function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

// Atribuindo variável ao objeto
let dolar = fazGet("https://economia.awesomeapi.com.br/last/USD-BRL");
let cotacaoDia = JSON.parse(dolar);

// Atribuindo variável aos valores da cotação e dia
let valorDolar = cotacaoDia.USDBRL.bid;
let dataCotacao = cotacaoDia.USDBRL.create_date;





