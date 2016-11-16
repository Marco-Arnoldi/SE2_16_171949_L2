
var visibile = false;

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