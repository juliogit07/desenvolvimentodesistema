// análise booleana
let status = true
let acao = prompt("indique uma ação");

if (acao !== "" && acao <= 1 && acao > 0) {

    let confirmar = confirm("deseja alterar o sistema")
    if (confirmar) {
        console.log(`voce confirmou a alteração ${acao} `)
            

    } else {
alert("você cancelou a alteração")

    }
}