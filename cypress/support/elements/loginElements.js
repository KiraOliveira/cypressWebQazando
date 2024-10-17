class loginElements {
    
    // Botão para acessar a tela de Login
    botaoAcessarLogin = () => { return '.right_list_fix > :nth-child(1) > a' }

    // Tela de Login
    modalLogin = () => { return '.account_form' }
    labelLogin = () => { return '.account_form > h3' }

    // Email
    blocoEmail = () => { return '.account_form > :nth-child(2)' }
    labelEmail = () => { return ':nth-child(2) > label' }
    campoEmail = () => { return '#user' }

    // Senha
    blocoSenha = () => { return '.account_form > :nth-child(3)' }
    labelSenha = () => { return ':nth-child(3) > label' }
    campoSenha = () => { return '#password' }

    // Botão de Login para realizar o Login
    botaoLogin = () => { return '#btnLogin' }

    // Lembrar de Mim
    remember = () => { return '.form-check' }
    checkRemember = () => { return '#materialUnchecked' }
    textRemember = () => { return '.form-check-label' }

    // Ainda não tem conta
    botaoNaoTemConta = () => { return '#createAccount' }

    // Box Com Login Sucesso
    boxSucess = () => { return '.swal2-popup'}
    msgSuces = () => { return '#swal2-title' }
    botaoConfirmSucess = () => { return '.swal2-confirm' }   

    // Mensagens
    emailInvalido = () => { return '.invalid_input' }
    senhaInvalida = () => { return '.invalid_input' }

  }
  
  export default new loginElements;


  