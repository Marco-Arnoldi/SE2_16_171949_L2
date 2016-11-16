//variabili globali
var visibile = false;               // per memorizzare la visibilita dei campi di input
var n_articoli_max = 30;            // limite massimo di articolo all'interno della tabella
var riga = 1;                       // per tenere traccia della riga del prossimo aricolo   
var articolo;                       // per salvare il dome dell'articolo
var n_elementi;                     // per salvare il numero di elementei dell'articolo
var lista_articoli = [];            // lista che contine i nomi degli articoli
var articolo_presente = false;      // per sapere se un articolo è presente o meno
var riga_articolo_presente;         // per memorizzare riga articolo presente

/**
 * @brief funzione che resetta i compi di input  
 */

function reset()
{
    document.getElementById("item").value = "";
    document.getElementById("n_item").value = "";
}

/**
 * @brief funzione che rende visibile e invisibile il div_input e chiama superato_limite()
 * @return una modifica alla pagina con la visibilita o l'invisibilita del div_input
 */

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

/**
 * @brief  funzine che modifica il limite ai articoli e chiama la funzione superato_limite
 * @return ritorna un messaggio che conferma la modifica del limite massimo
 *          
 */ 

function modificalimite()
{
    n_articoli_max = document.getElementById("limite_max").value;
    alert("Limite massimo di articoli impostato a "+n_articoli_max);
    superato_limite();
}

/**
 * @brief funzione che avverte se viene superato il numero di articoli
 * @return ritorna un messaggio che avvisa che il numero di articoli presenti in tabella è
 *         superiore al limite di articoli massimo 
 */

function superato_limite()
{
    if((riga-1)>n_articoli_max)
    {
        alert("ATTENZIONE il limite massimo e' inferiore al numero di Articoli presenti nella tabella");
    }
}

/**
 * @brief aggiunge un articolo allla tabella e chiama la funzione visibile invisibile
 * @return ritorna una modifica alla tabella con l'agiunta di un nuovo articolo o se 
 *          l'articolo è gia presente viene aggiornato il numero di elementi 
 *         
 */         

function addItem()
{
    articolo = document.getElementById("item").value;
    n_elementi =  document.getElementById("n_item").value;
    var table = document.getElementById("myTable");
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




