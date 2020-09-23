/*     aula 1

var nome = "Vinicius Zamai";
var idade = 22;
var idade2 = -3;
var idade3 = "0"

alert(nome + " tem " + idade + " anos");
alert(idade + idade3);
var fraseMentirosa = "One Piece é Falso";
console.log(fraseMentirosa.replace("Falso", "Real").toUpperCase());
console.log("ONE PIECE É FALSO".replace("FALSO", "REAL").toLowerCase());

*/

/*      aula 2     

var lista = ["Framboesa", "Amora", "Limão zera".replace(" zera", "")];
lista.push("Jabuticaba");
console.log(lista.pop());
console.log(lista.reverse());
console.log(lista.toString()[12]);

var fruta = {
    nome: "Cereja",
    cor: "Vermelha",
    ehBoa: true
};
var fruta2 = {
    nome: "Kiwi",
    cor: "Verde",
    ehBoa: true
};
var fruta3 = {
    nome: "Figo",
    cor: "Verde",
    ehBoa: false
};

var frutas = [
    fruta, 
    fruta2, 
    fruta3
];

console.log(frutas[2].cor);

var frutas2 = [
    {nome: "Tomate", cor: "Vermelho"}, 
    {nome: "Siciliano", cor: "Amarelo"}, 
    {nome: "Melância", cor: "Verde"}
];

console.log(frutas2[2].cor);

*/ 

/*    aula 3    

var idade = prompt("Qual sua idade");

if (idade >= 18) {
    alert("Ta dentro");
} else {
    alert ("Ta fora");
}

var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
for(var count = 0; count <= 6; count++) {
    console.log(count);
}

var d = new Date();
// getDay retorna o dia da semana em número
// getDate retorna o dia do mês em número
console.log(d.getDate());

*/

/*    aula 4     

function soma (n1, n2) {
    return n1 + n2;
}

console.log(soma(5,10));

var somar = function(n1, n2) {
    return n1+n2;
}

console.log(soma(5, somar(5,10)))

//Como no curso aprendemos a retornar uma variável com valor true/false, pensei que
//poderia retornar o resultado diretamente, economizando umas linhas de código..
function validarIdade(idade) {
    return idade > 18;
}

//Pesquisei sobre If ternário e vi que simplifica mais as condicionais
console.log("You " + (validarIdade(prompt("Sua idade:")) ? "shall pass" : "shall return"));

*/

/*   aula 5   */

function welcomido() {
    alert("Seja pouco mal vindo!");
}

function clicou() {
    document.getElementById("estressadinho").innerHTML = "Pare de me clicar ☻";
    document.getElementById("btnGoodBye").innerHTML = "Tchau galeris";
}

function adeus() {
    window.open("https://www.youtube.com/channel/UCxvGt6iJ8hxY0kbMLg3gTJA"); //abre em outra guia
    window.location.href = "https://www.youtube.com/channel/UCxvGt6iJ8hxY0kbMLg3gTJA"; //abre na mesma guia
}

function aiPara() {
    document.getElementById("mouseOver").innerHTML = "";
    alert("Passa mais n");
}

function numerozito(elem) {
    console.log(elem.value);
}