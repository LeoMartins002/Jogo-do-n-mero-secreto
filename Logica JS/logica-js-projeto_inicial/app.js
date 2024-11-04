alert('Boas vindas ao jogo do númrero secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao n.s
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
       
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é maior que ${chute}!`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1) {
//  alert(`Isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
//  alert(`Isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`); 
//}
