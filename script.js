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

// Configuração da data da cotação
function dataHora() {
    dataCotacao = new Date();
    let dia = dataCotacao.getDate();
    let mes = dataCotacao.getMonth();
    let ano = dataCotacao.getFullYear();
    let hora = dataCotacao.getHours();
    let minutos = dataCotacao.getMinutes();

    let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    return dia + " de " + meses[mes] + " de " + ano + " | " + hora + ":" + minutos + " UTC"
}

let cotacaoDoDia = document.getElementById("data-cotacao");
cotacaoDoDia.value = dataHora();


//





