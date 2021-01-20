function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 75*i)
    })
}
const titulo = document.querySelector('#texto-do-barner')
typeWrite(titulo)

function scrolls(){
    const img1 = document.querySelectorAll('.js-anima2');
    const windowMetade = window.innerHeight ;
    function animaScroll(){
        img1.forEach((imagem)=>{
            const corpoTop = imagem.getBoundingClientRect().top;
            const inCorpoVisible = (corpoTop - windowMetade)<-60;
            if(inCorpoVisible){
                imagem.classList.add('ativo') 
            }
            else{
                imagem.classList.remove('ativo')
            }
        })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
}
scrolls()