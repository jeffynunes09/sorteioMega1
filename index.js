let sorteio // função que gera o lopp 
let i = 0; // indice 
let mega = new Array();  //array de armazenamento dos numeros 


while (i < 6) {  // lopp while p/ gerar numeros 


    sorteio = Math.ceil(Math.random() * 60); // metodo sorteio (ceil p/ arredondar) (random gerar numeros)
    if (mega.indexOf(sorteio) < 0) { // indexOf p/ procurar o array  < 0 p/ testar se ja existem 
        mega.push(sorteio); // push p/ add numeros ao array
        i++;
    }

}
function ordenarNumeros(a, b) { // funcao para numeros ficarem em ordem 
    return a - b;
}

mega.sort(ordenarNumeros);
document.write(mega)