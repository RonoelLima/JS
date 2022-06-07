const hora = new Date().getHours();
const minutes = new Date().getMinutes();
 if (hora < 12) {
     console.log(`Bom dia são ${hora} e ${minutes} minutos `)
 } else if (hora > 12 < 18) {
     console.log(`Boa tarde ${hora} e ${minutes} minutos`)
 } else {
     console.log(`Boa noite ${hora} e ${minutes} minutos`)
 }
