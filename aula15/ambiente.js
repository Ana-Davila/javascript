let num = [5,8,2,9,1] // cria o array com 4 posições sendo essas posições separadas por virgulas
console.log(`Nosso vetor é ${num}`) //mostra na tela os valores que o array possui

num.push(7) //push é um método interno, nesse caso ele adiciona o num 7 no final do array
console.log(num)

console.log(`O vetor possui ${num.length} posições`) // mostra quantas posições possui o vetor/array

console.log(num[2]) // mostra o valor que está na psoção 2 (0,1,2)

console.log(num.sort()) //ordena os valores em ordem crescente

let pos = [1,4,5,8] // 0,1,2,3
console.log(pos.indexOf(5))
