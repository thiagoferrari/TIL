class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e) // handle means: 'lidar com...' esse nome de function é bastante usado no react
    });
  }

  handleSubmit(e) {
    e.preventDefault();// por padrão o submit quando é clicado ele mexe com o <form>, ele envia algo.. o preventDefault evita ele ser enviado, transformando o button apertado em um botão simples, sem submit.
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) { // se tudo estiver OK, forçamos o submit !
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove(); //limpa todos erros quando página é carregada
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText; //aqui busca o innerHTML do elem. anterior

      if (!campo.value) { //ligando aqui em baixo no texto...
        this.criaErro(campo, `${label} não pode estar blank`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) { // se contém a classe cpf
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');  //classe error-text pré formatada no CSS
    campo.insertAdjacentElement('afterend', div); //metodo que insere elemento abaixo do campo de insert
  }
}

const valida = new ValidaFormulario();
