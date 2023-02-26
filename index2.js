let sorteio
let i = 0;
mega = new Array();

while (i < 6) {

    sorteio = Math.ceil(Math.random() * 60);
    if (mega.indexOf(sorteio) < 0) {
        mega.push(sorteio);
        i++

    }

    function orderNumbers(a, b) {

        return a - b;

    }
}

mega.sort(orderNumbers);
document.write(mega);