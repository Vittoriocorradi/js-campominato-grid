ESERCIZIO CAMPO MINATO

FUNZIONI

//funzione per creare un elemento, attribuirgli una classe e un testo
Creo una funzione myCreateElement che avrà come argomenti il tag da creare, una classe da aggiungere e il testo che verrà inserito all'interno dell'elemento.
    Creo una variabile element che come valore avrà un elemento creato a seconda dell'argomento
    Aggiungo a element la classe dell'argomento
    Scrivo all'interno di element il testo dell'argomento
Estrapolo element


//Funzione per aggiungere una classe e scrivere un console log al click sull'elemento
Creo una funzione elementClick che avrà per argomenti un elemento, un contatore e una classe

    Inizio un evento al click sull'elemento 

        Scrivo il contatore in console
        Aggiungo all'elemento una classe per cambiare il colore

//Funzione bonus per selezionare la difficoltà
Creo una funzione difficultyChoice che avrà per argomento un elemento

    Creo una variabile cellNumber
    Inizio uno switch che darà un valore a cellNumber a seconda della difficoltà inserita
    Estrapolo cellNumber


ESERCIZIO

Creo una variabile button per identificare il bottone che andrà a generare la griglia
Creo una variabile container per identificare il .container dell'html

Inizio un evento al click del bottone

    Creo una variabile difficultySetting che avrà come valore il risultato di un input select
    Creo una variabile CellNumber a cui attribuirò come valore il risultato estrapolato dalla funzione difficultyChoice con argomento difficultySetting

    Attribuisco vuoto a container così da ripulire la pagina al click del bottone

    Inizio un ciclo con i che va da 1 a 100 
        Creo un elemento usando la funzione myCreateElement
        Appendo l'elemento creato al container
        aggiungo la funzione elementClick


