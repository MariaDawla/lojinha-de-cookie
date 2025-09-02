// Pega todos os botões
const addToCartButtons = document.querySelectorAll('.addToCart'); 
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');

//Pega o nome e a foto do próprio modal
const modalName = document.getElementById('modalName')
const modalImg = document.getElementById('modalImg')

// Abrir modal para cada botão
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o card do cookie
        const card = button.parentElement; 
        // Pega a imagem
        const imgSrc = card.querySelector('img').src; 
        // Pega o nome
        const name = card.querySelector('h3').textContent; 

        // Atualiza o modal
        modalImg.src = imgSrc;
        modalName.textContent = name;
        cartModal.showModal();
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    cartModal.close();
});
