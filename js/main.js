
//carrossel
document.addEventListener("DOMContentLoaded", () => {
const imagens = document.querySelectorAll(".container_carrossel>img");
const botao_anterior = document.getElementById("anterior");
const botao_proximo = document.getElementById("proximo");
let imagem_atual = 0;
    
//mostrar primeira imagem
function showImage(index) {
    imagens.forEach((img, i) => {
        img.classList.remove("primeiro");
        if (i === index) {
            img.classList.add("primeiro");
        }
    });
}

//config. botao proximo
botao_proximo.addEventListener("click", () => {
    imagem_atual = (imagem_atual + 1) % imagens.length;
    showImage(imagem_atual);
});

//config. botao anterior
botao_anterior.addEventListener("click", () => {
    imagem_atual = (imagem_atual - 1 + imagens.length) % imagens.length;
    showImage(imagem_atual);
});

//mudar imagem
setInterval(() => {
    imagem_atual = (imagem_atual + 1) % imagens.length;
    showImage(imagem_atual);
},7000);
});


/*menu*/

const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});
