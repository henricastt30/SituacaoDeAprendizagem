function esconderTodas(){
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
}

function exibirTelaEdit(){
    document.getElementById('baixoMeioEditar').style.display = 'block'
    document.getElementById('abaConfirmEdit').style.display = 'block'
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

document.querySelectorAll('.crud').forEach(function(label) {
    label.addEventListener('click', function() {
        // Remove a classe "active" de todos os botões
        document.querySelectorAll('.crud').forEach(function(lbl) {
            lbl.classList.remove('active');
        });
        
        // Adiciona a classe "active" ao botão clicado
        this.classList.add('active');
    });
});

document.getElementById('confirmcad').addEventListener('click', function() {
    // Remover o foco do botão após o clique para voltar ao estado normal
    this.blur();
});




let elementoInputUser = document.getElementById('user')
let elementoInputPass = document.getElementById('password')
let elementoInputCp = document.getElementById('confirmPassword')
let elementoUserListagem = document.getElementById('esqBaixo')
let elementoPassListagem = document.getElementById('dirBaixo')

let users = [];
let passwords = [];
let confirmPass = [];


let posUser, posPass

let listaDados = ''
let listaUsers = ''
let listaPass = ''

let buscarUser, buscarPass

function cadastro(){
    if (users.indexOf(user.value) != -1) {
        alert('Nome de usuário já existente, tente outra vez!');
        return; // isso daq Impede a execução do cadastro se algum campo estiver vazio
    }

    // Verificar se os campos estão vazios, obrigado chatgpt, me ensinou mt
    if (user.value === '' || password.value === '' || confirmpassword.value === '') {
      alert('Por favor, preencha todos os campos!');
        return;
    }
    if (password.value === confirmpassword.value) {
     users.push(user.value);
     passwords.push(password.value);
     confirmPass.push(confirmpassword.value);
     alert('O cadastro foi efetuado com Sucesso!');
     document.getElementById('password').value = '';
    document.getElementById('user').value = '';
    document.getElementById('confirmpassword').value = '';
    } 
    else {
        alert('As senhas não coincidem, tente novamente!');
    }
    lista();
    }

    function buscar(){
        buscarUser = document.getElementById('buscarUser').value
        posUser = users.indexOf(buscarUser)
        if(posUser == -1){
            alert('Usuário não encontrado.')
        }
        else{
            // Exibindo as divs quando o usuário for encontrado
            document.getElementById('listarBlockNone').style.display = 'block'
            document.getElementById('containerBaixoMeioEditar').style.display = 'block' // Garantindo que esta div será mostrada
            document.getElementById('abaConfirmEdit').style.display = 'block'  // Garantindo que esta div será mostrada
            document.getElementById('newUser').value = users[posUser]
            document.getElementById('newPass').value = passwords[posUser]
        }
    }
    
    function edit(){
        users[posUser] = document.getElementById('newUser').value;
        passwords[posUser] = document.getElementById('newPass').value;
        alert('O usuário foi editado com sucesso!')
        
        document.getElementById('containerBaixoMeioEditar').style.display = 'none'
        document.getElementById('abaConfirmEdit').style.display = 'none'

        document.getElementById('buscarUser').value = ''
        lista()
    }
    

function mostrarUsers(){
    listaUsers = ''
    for(i=0; i < users.length; i++){
        listaUsers = listaUsers + users[i] + '<br>'
    }
    elementoUserListagem.innerHTML = listaUsers
}
    
function mostrarPasswords(){
    listaPass = ''
    for(i=0; i < passwords.length; i++){
        listaPass = listaPass + passwords[i] + '<br>'
    }
    elementoPassListagem.innerHTML = listaPass
}
    
function lista(){
    mostrarUsers();
    mostrarPasswords();
}
    
function confirmDel(){
    buscarUser = document.getElementById('delUser').value
    buscarPass = document.getElementById('delPass').value
    posUser = users.indexOf(buscarUser)
    posPass = passwords.indexOf(buscarPass)
    if(posUser == -1){
        alert('Usuário incorreto ou inexistente.')
    }
    else if(posPass == -1){
        alert('Senha inválida!')
    }
    else{
        document.getElementById('baixoMeioDeletar').style.display = 'block'
    }
}

    function cancelDel(){
        document.getElementById('baixoMeioDeletar').style.display = 'none'
        document.getElementById('delUser').value = "";
        document.getElementById('delPass').value = "";
        
    }

function del(){
    buscarUser = document.getElementById('delUser').value
    buscarPass = document.getElementById('delPass').value
    posUser = users.indexOf(buscarUser)
    posPass = passwords.indexOf(buscarPass)
    users.splice(posUser,1)
    passwords.splice(posPass,1)
    lista()
    alert('Seu cadastro foi excluido com sucesso!')
    document.getElementById('baixoMeioDeletar').style.display = 'none'
    document.getElementById('delUser').value = "";
    document.getElementById('delPass').value = '';
}