// mostrar a posição do array e o valor que tem nesta posição
let valores= [8,1,7,4,2,9]

/*for (let pos = 0 ; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o elemento ${valores[pos]}`)
}*/
for(let pos in valores){ // PARA cada posição EM/DENTRO de num
    console.log(`A posição ${pos} tem o elemento ${valores[pos]}`) //mostre na tela
}