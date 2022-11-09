//variaveis

const form = document.querySelector('form')
//variavel que quando chamada faz uma
//procura  no nosso document atrves do indicado

const inputWeight = document.querySelector('#peso') 
const inputHeight = document.querySelector('#altura')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal span')
const modalBtnClose = document.querySelector('.modal button.close')

//==========================================

//Essa funcao criada e atribuida como valor abaixo 
//so vai ser executada quando clicar no botao Submit
form.onsubmit = function(event){  
    event.preventDefault()  //ATRVAES DESTE REMOVE O PADRAO DO SUBMIT QUE SERIA SEMPRE QUE CLCIAR ATUALIZARIA A PAGINA
    
    const peso = inputWeight.value
    const altura = inputHeight.value
    
    const result = IMC(peso, altura)
    const message = `Seu IMC é de ${result}`

    modalWrapper.classList.add('open')
    modalMessage.innerText = message
    
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}


function IMC(peso, altura){
    return(peso/((altura/100) ** 2)).toFixed(2)
}