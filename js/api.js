function obterGato(){
    fetch('https://cataas.com/cat')
    .then(resultado => console.log(resultado.body))
    .catch(error => console.log('Erro ao executar API', ERROR));
}