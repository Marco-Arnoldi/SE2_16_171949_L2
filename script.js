
var visibile = false;
var n_articoli_max = 30;
var riga = 1;


function reset()
{
    document.getElementById("item").value = "";
    document.getElementById("n_item").value = "";
}

function visibile_invisibile()
{
    if(visibile)
    {
        div_input.style.display ='none';
        visibile=false;
    }
    else
    {
        div_input.style.display ='block';
        visibile=true;
    }
    reset();
    superato_limite();
}


function modificalimite()
{
    n_articoli_max = document.getElementById("limite_max").value;
    alert("Limite massimo di articoli impostato a "+n_articoli_max);
    superato_limite();
}


function superato_limite()
{
    if((riga-1)>n_articoli_max)
    {
        alert("ATTENZIONE il limite massimo e' inferiore al numero di Articoli presenti nella tabella");
    }
}