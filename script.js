function esconderTodas(){
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
}

function cadastrar(){
    esconderTodas()
    document.getElementById('cadastrar').style.display = 'block'
}

function editar(){
    esconderTodas()
    document.getElementById('editar').style.display = 'block'
}

function deletar(){
    esconderTodas()
    document.getElementById('deletar').style.display = 'block'
}

function listar(){
    esconderTodas()
    document.getElementById('listar').style.display = 'block'
}