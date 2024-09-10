
class Usuario {
    constructor(login, senha){
        this.login = login;
        this.senha = senha;
    }
    validarLogin(){
        return this.login.toString().includes('@')
        && this.login.toString().includes('.')
        ? 'login válido'
        : 'Login inválido';
    }
}

const usuario1 = new Usuario('tiagosousa2011@live.com', '1234');
console.log(usuario1.login, usuario1.validarLogin());

const usuario2 = new Usuario('joao.com', 'kdfkdf');
console.log(usuario2.login, usuario2.validarLogin());

class Administrador extends Usuario{
    constructor(login, senha, resumoProfissional){
        super(login, senha);
        this.resumoProfissional = resumoProfissional;
    }
}

const administrador1 = new Administrador('administrador@admin.com', '2345', 'meu resumo profissional');
console.log(administrador1.login, administrador1.validarLogin());
console.log(usuario2.resumoProfissional, Administrador.resumoProfissional);