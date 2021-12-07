// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function generate_Number()
{   
    let Array = [];
    for(let i = 0; i < 5; i++)
    {
        let num = Math.floor(Math.random() * 20) + 1
        if(!Array.includes(num))
        {
            Array.push(num);
        }
        else
        {
            i--;
        }
    }
    
    Array.sort((a, b) => {
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0;
    });
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



let array_num = generate_Number();
console.log(array_num);
let string_num = ArrayToString(array_num);
let num_box = document.querySelector(".game-over");
let row = document.querySelector(".row");

num_box.innerHTML = `<h1> ${string_num} </h1>`;

setTimeout(function(){
    num_box.innerHTML = '';
    let play;
    play = setTimeout(function()
    {
        let button = document.querySelector(".send");
        let insert = document.querySelector(".input-box");
        let i = 0;
        let play_time;
        let user_numbers = [];
        insert.classList.remove("d-none");

        play_time = setTimeout(function()
        {
            insert.classList.add("d-none");
            num_box.innerHTML = `<h1> Tempo scaduto </h1>`;
        }, 30000);

        button.addEventListener("click", 
        function()
        {
            let user_number = parseInt(document.querySelector(".form-control").value); 
            
            if(i < 5)
            {
                if(user_number < 1 || user_number > 20)
                {
                    alert("il numero nono rientra nel range");
                    i--;
                }
                else
                {
                    if(user_numbers.includes(user_number))
                    {
                        alert("numero già inserito");
                        i--;
                    }
                    else
                    {
                        user_numbers.push(user_number);
                        if(!array_num.includes(user_number))
                        {
                            num_box.innerHTML = `<h1> HAI PERSO </h1>`;
                            clearTimeout(play_time);
                        }
                        else    if(user_numbers.length == array_num.length)
                                {
                                    num_box.innerHTML = `<h1> HAI VINTO </h1>`;
                                    clearTimeout(play_time);
                                }
                    }
                }
            }
        });

    }, 100)
}, 2000)



