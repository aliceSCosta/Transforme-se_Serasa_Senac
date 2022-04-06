var idadeAtual;
var idadeFutura;
var anosAcrescentados;

idadeAtual = parseInt(prompt("Quantos anos você tem? "));
anosAcrescentados = parseInt(prompt("Quantos anos você quer acrescentar à sua idade? "));

idadeFutura = idadeAtual + anosAcrescentados;

alert("Daqui à " + anosAcrescentados + " anos você terá " + idadeFutura + " anos.");