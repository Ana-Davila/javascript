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
        if(fsex[0].checked){
            gênero = 'Homem'
        }
        else if(fsex[1].checked){
            gênero = 'Feminino'
        }
    }
}