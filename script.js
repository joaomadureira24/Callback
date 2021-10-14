/* Callback com setTimeou */

let usuarios = ["Yara",
                "Jonin",
                "Giuliana",
                "Rafaela"
]
function inserirUsuario(nome, callback){
    setTimeout(()=>{
    usuarios.push(nome);callback()},1000)}

function listarUsuarios(){console.log(usuarios)}

inserirUsuario("Jonathan",listarUsuarios)