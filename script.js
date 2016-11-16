
var visibile = false;
var n_articoli_max = 30;
var riga = 1;
var articolo;                       
var n_elementi;                     
var lista_articoli = [];            
var articolo_presente = false;     
var riga_articolo_presente;         



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
    superato_limite()
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
function addItem()
{
    superato_limite();
    articolo = document.getElementById("item").value;
    n_elementi =  document.getElementById("n_item").value;
    var table = document.getElementById("myTable");
    if(n_articoli_max == 0 && riga == 1)
    {
        alert("Non puoi mettere piu di "+n_articoli_max+" articoli nella tabella");
        visibile_invisibile();
        return;
    }
    if(lista_articoli.length == 0)
    {
        lista_articoli [riga-1] = articolo;
        var row = table.insertRow(riga);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = articolo;
        cell2.innerHTML = n_elementi;
        riga = riga + 1;
    }
    else
    {
        for(var i=0; i< lista_articoli.length; i++)
        {
            if(lista_articoli[i]==articolo)
            {
                articolo_presente = true;
                riga_articolo_presente = i+1;
            }
        }
        if(articolo_presente)
        {
            document.getElementById("myTable").rows[riga_articolo_presente].cells[1].innerHTML = (+document.getElementById("myTable").rows[riga_articolo_presente].cells[1].innerHTML) + (+n_elementi);           
        }
        else
        {
            if(riga > n_articoli_max)
            {
                alert("Non puoi mettere piu di "+n_articoli_max+" articoli nella tabella");
                visibile_invisibile();
                return;          
            }
            lista_articoli [riga-1] = articolo;
            var row = table.insertRow(riga);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = articolo;
            cell2.innerHTML = n_elementi;        
            riga = riga + 1;
        }   
        articolo_presente = false;            
    }
   visibile_invisibile();
}



