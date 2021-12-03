// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function generate_Number()
{   
    let Array = [];
    for(let i = 0; i < 5; i++)
    {
        let num = Math.floor(Math.random() * 100) + 1
        if(!Array.includes(num))
        {
            Array.push(num);
        }
        else
        {
            i--;
        }
    }
    return Array;
}

function ArrayToString(array)
{
    let string;
    for(let i = 0; i < array.length; i++)
    {
        if(i == 0)
        {
            string = array[i] + ' ';
        }
        else
        {
            string += ' ' + array[i];
        }
    }
    return string;
}

let array_num = generate_Number();
let string_num = ArrayToString(array_num);
let num_box = document.querySelector(".game-over");

num_box.innerHTML = `<h1> ${string_num} </h1>`;

setTimeout(function(){
    num_box.classList.add("d-none");
    setTimeout(function(){
        let error = false;
        let i = 0;
        while( i < 5 && error == false)
        {
            let user_num = parseInt(prompt("inserisci un numero"));
            if(!array_num.includes(user_num))
            {
                error = true;
                alert("hai perso");
            }
            else
            {
                i++;
            }
        }
    }, 100)
}, 10000)