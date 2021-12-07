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



function grid(index, array)
{
    let row = document.querySelector(".row");
    let box = document.createElement("div");
    let string_box = document.querySelector(".game-over");
    let string = document.querySelector(".game-over > h1");
    box.classList.add("box");
    box.append(index);
    row.append(box);

    let attemps = 3;
    let result;
    box.addEventListener("click", 
    function click_trigger()
    {
        if(!array.includes(parseInt(box.innerText)))
        {
            box.classList.add("bg-red");
            let wrong_box = document.querySelectorAll(".box.bg-red");
            if(wrong_box.length == attemps)
            {
                row.classList.add("opacity-50")
                string_box.classList.remove("d-none");
                string.innerText='';
                string.innerText='hai perso';
            }
        }
        else
        {
            box.classList.add("bg-green");
            let right_box = document.querySelectorAll(".box.bg-green");
            if(right_box.length == 5)
            {
                row.classList.add("opacity-50");
                string_box.classList.remove("d-none");
                string.innerText='';
                string.innerText='hai vinto';
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

        let result = document.querySelector(".game-over > h1").innerText;

        if(result == "win" || result == "lose")
        {
            let all_box = document.querySelectorAll(".box");
            for(let i= 0; i <= all_box.length; i++)
            {
                all_box[i].removeEventListener("click", click_trigger);
            }
        }

    }, 100)
}, 2000)

