//c'est pas fini mais j'ai fais ça à la main c'est deja ça
let s = 60;
let seconde = document.getElementById('seconde');
let minutes = document.getElementById('minutes');
let min = 20;
let inter = setInterval(fonct, 1000);
function inter2() {
    setInterval(fonct2, 1000);
}
function fonct() {
    if (s === 0) {
        if (min === 0) {
            clearInterval(inter);
            console.log(min+":"+s--);
            minutes.innerHTML = min;
            seconde.innerHTML = s
            console.log("c'est la pause");
            inter2();
        }
        else{
            s = 60;
            min--;
        }
    } else {
        console.log(min+":"+s--);
        minutes.innerHTML = min;
        seconde.innerHTML = s
    }
}
let s2 = 60;
let min2 = 20;
let seconde2 = document.getElementById('seconde');
let minutes2 = document.getElementById('minutes');
function fonct2() {
    if (s2 === 0) {
        if (min2 === 0) {
            clearInterval(inter2);
            delete inter2();
            console.log(min2 +":"+s2--);
            minutes2.innerHTML = min2;
            seconde2.innerHTML = s2
            console.log("retour aux charbon");
            
        }
        else{
            s2 = 60;
            min2--;
        }
    } else {
        console.log(min2 +":"+s2--);
        minutes2.innerHTML = min2;
        seconde2.innerHTML = s2;
    }
}