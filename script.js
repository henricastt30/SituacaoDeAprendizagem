//Função de trocar de tela:

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

    //Inputs do cadastro:
    let elementoInputUser = document.getElementById('user')
    let elementoInputPass = document.getElementById('password')
    let elementoInputCp = document.getElementById('confirmPassword')

    //Div para mostrar a listagem:
    let elementoUserListagem = document.getElementById('esqBaixo')
    let elementoPassListagem = document.getElementById('dirBaixo')

//Vetores Cadastro

let users = [];
let passwords = [];
let confirmPass = [];

    //Variável para armazenar a posição do usuário no vetor;
    let posUser

    //Varia´vel para armazenar a listagem:
    let listaDados = ''
    let listaUsers = ''
    let listaPass = ''

function cadastro(){

    if(password.value == confirmpassword.value){
    users.push(user.value)
    passwords.push(password.value)
    confirmPass.push(confirmpassword.value)

    alert('O cadastro foi efetuado com Sucesso!')
    console.log(users,passwords)
    }
    else{
        alert('As senhas não coincidem, tente novamente!')
    }
    lista()
    }

    // função para excluir usuário
    // function deleta{

    //     // Encontra a posição do usuário no vetor e armazena
    //     posUser = users.indexOf(elementoInputUser.value)

    //     // Exclui o usuário e seus dados dos vetores
    //     users.splice(posUser, 1)
    //     passwords.splice(posUser, 1)
    //     confirmPass.splice(posUser, 1)

    //     alert('Usuário excluído com sucesso!')

    //     //chama a função lista para atualizar a lista
    //     lista()
    // }

        //função para editar dados do usuário logado
        function edita(){

                // encontra a posição do usuário no vetor e armazena
                posUser = users.indexOf(elementoInputUser.value)

                // o dado 'username' não é possível alterar pois é o dado chave da conta

                passwords[posUser] = elementoInputPass.value

                alert('Dados Editados!')

                // chama a função lista para atualizar a lista
                lista()
        }

    // Função para montar listagem e mostrar na div de lista


    function mostrarUsers(){
        // Resetar a lista antes de montar ela atualizada novamente
        listaUsers = ''

        // Loop para percorrer os vetores
        for(i=0; i < users.length; i++){
    
        // Monta a lista pegando os dados dos vetores em cada posição e salva em uma string
            listaUsers = listaUsers + users[i] + '<br>'
    
        }
        
        //Mostra a listagem na div de lista
        elementoUserListagem.innerHTML = listaUsers
    }
    
    function mostrarPasswords(){
        // Resetar a lista antes de montar ela atualizada novamente
        listaPass = ''
        for(i=0; i < passwords.length; i++){
            listaPass = listaPass + passwords[i] + '<br>'
        }
    
        elementoPassListagem.innerHTML = listaPass
    }

    function lista(){
        mostrarUsers()
        mostrarPasswords()
    }
    

    
