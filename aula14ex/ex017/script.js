
function calcular(){
    let nescolha = window.document.getElementById("inum")
    let mselecione = window.document.getElementById("selecione")

    if(nescolha.value.length == 0){
        alert("[ERRO] Digite o valor!")
    }
    else{
        let n = Number(nescolha.value)
        let c = 1
        mselecione.innerText=''
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} X ${c}= ${n*c}`
            mselecione.appendChild(item)
            c++
        }
    }
}
    

