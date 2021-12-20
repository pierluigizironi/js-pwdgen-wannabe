console.log('JS OK')

/* Chiedere all'utente nome, cognome e colore preferito a cui 
si aggiungerà in automatico 
 il numero 21 */

/* 
1 Recupero il nome utente
2 Recupero il cognome utente 
3 Recupero il colore preferito
4 Li unisco
5 aggiungo il numero 21 alla fine
*/

// 1 Chiedo qual è il nome

const userName = prompt('Come ti chiami?')
console.log (userName)

// 2 Chiedo qual è il cognome

const userSurname = prompt('E il tuo cognome?')
console.log (userSurname)

// 2 Recupero il colore preferito dell'utente

const userColor = prompt('Dimmi anche il tuo colore preferito!')
console.log (userColor)

console.log (
    `
   La tua password è la seguente: ${userName}${userSurname}${userColor}21

    `
)