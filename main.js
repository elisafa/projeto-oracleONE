const textArea = document.querySelector('textarea')
const criptrografarBtn = document.querySelector('.criptografar')
const resposta = document.querySelector('.resposta')
const sumir = document.querySelector('.resultado-tela')
const copiarBtn = document.querySelector('.copiar')

function substituir(texto){
    const textoAntigo = texto
    const textoNovo = textoAntigo.replaceAll('a','ai').replaceAll('e', 'enter')
                                 .replaceAll('i', 'imes').replaceAll('o', 'ober')
                                 .replaceAll('u', 'ufat')
    return textoNovo
}

// para descriptografar é so fazer o inverso


criptrografarBtn.addEventListener('click', ()=>{
    if(textArea.value != ''){
        sumir.classList.add('sumir')
        resposta.classList.add('aparecer')
        copiarBtn.classList.add('aparecer')
        
        const resp = substituir(textArea.value)
        console.log(resp)
        resposta.innerHTML = resp
    }
   
   
})