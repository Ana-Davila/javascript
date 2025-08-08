function verificar(){
    var data =  new Date() // pega a data atual
    var ano = data.getFullYear() //fullyear vai pegar o ano com 4 dígitos ex 2025
    var fano = window.document.getElementById('txtano')
    var mas = window.document.getElementById('mas')
    var fem = window.document.getElementById('fem')
    var res = window.document.getElementById('res')

    //velidação, verifica o dado digitado no campo ano é valido
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = window.document.getElementsByName('radsex') //ByName porque existe mais de um que precisa ser selecionado
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //cria um novo elemento img e guarda na var img
        img.setAttribute('id', 'foto') //cria um id para imf chamado foto
        if(fsex[0].checked){ // se fsexo[0] se fsexo for homem
            gênero = 'Homem' //gênero= homem
            if(idade >=0 && idade <10){ //idade entre 0 e 10
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            }
            else if(idade  < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }
            else if(idade < 50){
                 //adulto
                 img.setAttribute('src', 'adulto-m.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }
        else if(fsex[1].checked){ // senao se fsexo [1]= Feminino
            gênero = 'Mulher' // gênero = Feminino
            if(idade >=0 && idade <10){ //idade entre 0 e 10
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
            }
            else if(idade  < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            }
            else if(idade < 50){
                 //adulto
                 img.setAttribute('src', 'adulto-f.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML= `Detectamos um(a) ${gênero}, com ${idade} anos.`
        res.append(img)
    }
}