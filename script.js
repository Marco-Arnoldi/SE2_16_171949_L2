
var visibile = false;
var n_articoli_max = 30;


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
}


function modificalimite()
{
    n_articoli_max = document.getElementById("limite_max").value;
    alert("Limite massimo di articoli impostato a "+n_articoli_max);
}