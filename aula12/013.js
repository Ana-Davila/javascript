var agora = new Date()
var diaSem = agora.getDay()
/*
Dias da semana
Domingo[0]
Segunda[1]
Terça  [2]
Quarta [3]
Quinta [4]
Sexta  [5]
Sábado [6]
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break //OBRIGATÓRIO
    case 1:
        console.log('Segunda')
        break  //OBRIGATÓRIO
    case 2:
        console.log('Terça')
        break  //OBRIGATÓRIO
    case 3:
        console.log('Quarta')
        break  //OBRIGATÓRIO
    case 4:
        console.log('Quinta')
        break  //OBRIGATÓRIO
    case 5: 
        console.log('Sexta')
        break  //OBRIGATÓRIO
    default:
        console.log('[ERRO] Dia inválido')
}