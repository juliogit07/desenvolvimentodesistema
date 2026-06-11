// 
let status = true;

let resposta = prompt("Digite uma informação:");

if (resposta !==  && resposta.trim() !== "") {

  let confirmar = confirm("Deseja confirmar esta ação?");

  if (confirmar) {
    alert("Ação confirmada.");
  } else {
    alert("Ação cancelada.");
  }

} else {
  alert("Nenhuma informação foi digitada.");
}
 

// PRUDUTO EXCLUIDO

