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
    console.log(Array);
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

// Generate Grid

function grid(index, array)
{
    let row = document.querySelector(".row");
    let box = document.createElement("div");
    box.classList.add("box");
    box.append(index);
    row.append(box);

    let attemps = 3;
    box.addEventListener("click", 
    function()
    {
        if(!array.includes(parseInt(box.innerText)))
        {
            box.classList.add("bg-red");
            let wrong_box = document.querySelectorAll(".box.bg-red");
            if(wrong_box.length == attemps)
            {
                row.classList.add("opacity-50")
            }
        }
        else
        {
            box.classList.add("bg-green");
            let right_box = document.querySelectorAll(".box.bg-green");
            if(right_box.length == 5)
            {
                row.classList.add("opacity-50")
            }
        }
    });
}

let array_num = generate_Number();
let string_num = ArrayToString(array_num);
let num_box = document.querySelector(".game-over");
let row = document.querySelector(".row");

num_box.innerHTML = `<h1> ${string_num} </h1>`;

setTimeout(function(){
    num_box.classList.add("d-none");
    row.classList.remove("d-none");
    setTimeout(function(){
        
        
        for(let i = 0; i < 100; i++)
        {
            grid(i, array_num);
        }

    }, 100)
}, 800000)

