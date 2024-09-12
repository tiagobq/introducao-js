const gatosDiv = $('#gatos');

function obterGato(){
    fetch('https://cataas.com/cat')
    .then(resultado => resultado.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);

        const image = document.createElement('img')
        image.src = imageObjectURL
        gatosDiv.append(image);
        
    })
    .catch(error => console.log('Erro ao executar API', error));
}