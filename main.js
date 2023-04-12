//As duas textareas a de inserção e de resposta
const textArea = document.querySelector('textarea')
const resposta = document.querySelector('.resposta')

//Os botões de criptografar, descriptrografar e copiar
const criptrografarBtn = document.querySelector('.criptografar')
const descriptrografarBtn = document.querySelector('.descriptografar')
const copiarBtn = document.querySelector('.copiar')

//Área onde se encontram as imagens
const sumir = document.querySelector('.resultado-tela')


// adicione um listener de evento para o evento keypress evitando os caracteres acentuados
textArea.addEventListener('keypress', function(event) {
    const char = event.key;
    if(/[^\w\s]|[A-Z]/g.test(char)) {
      event.preventDefault();
    }
})



//função que recebe o textArea.value digitado e usando o método replaceAll faz a substituição das vogais
function codificar(texto){
    const textoAntigo = texto
    const textoNovo = textoAntigo.replaceAll('e', "enter")
                                    .replaceAll('i', "imes")
                                    .replaceAll('a', "ai")
                                    .replaceAll('o', "ober")
                                    .replaceAll( 'u', "ufat");
    return textoNovo
}

//função que recebe o resposta.value já alterado e usando o método replaceAll faz a substituição das letras sugeridas pelas vogais anteriores
function decodificar(texto){
    const textoAntigo = texto
    const textoNovo = textoAntigo.replaceAll('ai','a').replaceAll('enter', 'e')
                                 .replaceAll('imes', 'i').replaceAll('ober', 'o')
                                 .replaceAll('ufat', 'u')
    return textoNovo
}

//função que recorta o texto do textaerea(que tem a classe chamada resposta) e coloca na área de transferência
function recortarTexto(texto){
    const textoRecortado = texto
    navigator.clipboard.writeText(textoRecortado)
}

//Aciona o clique do botão copiar que aciona a função recortarTexto enviando o valor da textarea(resposta)
copiarBtn.addEventListener('click', ()=>{
    recortarTexto(resposta.value)
    resposta.value = ''
})

//Botão de criptrografar
criptrografarBtn.addEventListener('click', ()=>{
    if(textArea.value != ''){
        sumir.classList.add('sumir')
        resposta.classList.add('aparecer')
        copiarBtn.classList.add('aparecer')
        
        const resp = codificar(textArea.value)
        resposta.innerHTML = resp
        textArea.value = ''
    }
})

//Botão de descriptrografar
descriptrografarBtn.addEventListener('click', ()=>{
    if(textArea.value != ''){
        sumir.classList.add('sumir')
        resposta.classList.add('aparecer')
        copiarBtn.classList.add('aparecer')
        
        const resp = decodificar(textArea.value)
        resposta.value = resp
    }
})