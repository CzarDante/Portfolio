const label = document.querySelector('label');
const body = document.querySelector('body');


label.addEventListener('clck', ()=>{
    console.log('label clicado');
    input.focus();
    body.classList.add('disable-scroll');
});

label.addEventListener('blur', () => {
    console.log('label desativado');
    body.classList.remove('disable-scroll');
});
