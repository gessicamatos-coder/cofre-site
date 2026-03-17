var senhaCorreta = 4321;
var TentativasSenha= 0
var botao = document.getElementById("bnt");


botao.addEventListener("click", function() {
    var tentativa = document.getElementById("senha").value;
    tentativa = Number(tentativa);

    if (isNaN(tentativa) || tentativa === 0) {
        document.getElementById("mensagem").innerText = "Digite um número válido!";
        return; 
    }
    TentativasSenha++;

   
    if (tentativa === senhaCorreta) {
        document.getElementById("mensagem").innerText = "🔓 Cofre aberto!\n+100 XP\n+0 recompensas 😎";
     return;  
    } 
   var msg = "";

if (TentativasSenha === 1) {
    msg = "❌ Errou! Mas foi só aquecimento 😏";
} else if (TentativasSenha === 2) {
    msg = "❌ Errou de novo... começa a ficar suspeito 😂";
} else if (TentativasSenha === 3) {
    msg = "❌ 3 vezes? Tá difícil hein 😬";
} else if (TentativasSenha === 4) {
    msg = "❌ Eu acredito em você (eu acho) 😈";
} else if (TentativasSenha === 5) {
    msg = "❌ Ok... talvez você precise das dicas 😅";
} else {
    msg = "❌ Já tentou " + TentativasSenha + " vezes... continue tentando 😎";
}

document.getElementById("mensagem").innerText = msg;
});

document.getElementById("d1").addEventListener("click",function(){
    document.getElementById("mensagem").innerText = "“Você está tentando contar… e esse é o erro.”";

    document.getElementById("d2").disabled= false;
});


document.getElementById("d2").addEventListener("click",function(){
    document.getElementById("mensagem").innerText = "“Cada símbolo tem um significado.” ";

    document.getElementById("d3").disabled= false;
});
document.getElementById("d3").addEventListener("click",function(){
    document.getElementById("mensagem").innerText = "“A ordem precisa ser questionada.”";

});
var cliquesDesistir = 0;

document.getElementById("desistir").addEventListener("click", function() {
    cliquesDesistir++;
    let botao = document.getElementById("desistir");

    if(cliquesDesistir <= 3){
        
        let x = Math.floor(Math.random() * 150) - 75;
        botao.style.transform = `translateX(${x}px)`;
        msg = ["Desistir tão cedo? Nem pensar 😈",
               "Sério isso? Tenta mais um pouco 😂",
               "Última chance... depois eu deixo 😏"][cliquesDesistir-1];
    } else {
        botao.style.transform = "translateX(0px)"; 
        msg = "Ok... você venceu.\nSenha: 4321 😎";
    }

    document.getElementById("mensagem").innerText = msg;
});