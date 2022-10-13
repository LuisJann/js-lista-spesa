/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */


const shoppingList = ["mela","pera","banana","arancia","uva","melone","cocomero","lattuga","cereali"];

let i = 0

while (i < shoppingList.length) {
   
    console.log(shoppingList[i]);
    const result = document.querySelector(".shopping-list");
    result.innerHTML += `<li class="shopping-list">${shoppingList[i]}</li>`;
    console.log(result);
    i++;
}
