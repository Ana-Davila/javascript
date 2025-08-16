function contar(){
    // primeiro crio as vars e as guardo como texto para fazer a validação
    let ini = window.document.getElementById("inicio")
    let fim = window.document.getElementById("fim")
    let passo = window.document.getElementById("passo")
    var contando = window.document.getElementById("contando")
    // validação
    if(ini.value.length == 0  || fim.value.length == 0 || passo.value.length == 0){
        contando.innerHTML= 'Impossível contar'
        alert('[ERRO] Faltam dados!')
    }
    // converter de texto para valor => value
    else{
        contando.innerHTML = 'Contando... <br>'
        let i = Number(ini.value) // a var i vai receber o valor que esta na var ini
        let f = Number(fim. value) // a var f vai receber o valor que esta na var fim
        let p = Number(passo.value) // a var p vai receber o valor que esta na var passo

        if(p <=0){
            alert('Passo inválido! Considerando 1')
            p= 1
        }
        if(i < f){ //se o valor inicial for menor que o final
            //estrutura de repetição crescente:
            for(let c = i; c <= f; c += p){ // a variavel c recebe o valor de i; enquanto c<= f; c= c +p
                contando.innerHTML += `  ${c}`
            }
        }
        // se não estrutura de repetição decrescente
        else{
            for(let c = i; c >= f; c -=p){
                contando.innerHTML += `  ${c}`
            }
        }
    }    
}