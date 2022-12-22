document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('WebDevelopment', {delay: 900})
    .delete(14)
    .type('Automation', {delay: 900})
    .delete(10)
    
    .go()
});