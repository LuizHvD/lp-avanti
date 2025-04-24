document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    // Calcular largura visível do carrossel
    const carouselWidth = carousel.clientWidth;
    // Largura de um card + gap
    const cardWidth = 200 + 16; // 200px do card + 16px do gap

    // Número de cards visíveis por vez
    const visibleCards = Math.floor(carouselWidth / cardWidth);
    // Largura total do scroll (considerando todos os cards + gaps)
    const scrollWidth = carousel.scrollWidth;

    // Função para verificar e atualizar o estado dos botões
    function updateButtonStates() {
      // Desativar o botão prev se estiver no início
      prevBtn.disabled = carousel.scrollLeft <= 0;

      // Desativar o botão next se estiver no final
      // Leva em conta a largura visível do carrossel
      const maxScrollLeft = scrollWidth - carouselWidth;
      nextBtn.disabled = carousel.scrollLeft >= maxScrollLeft - 5; // tolerância de 5px
    }

    // Quantidade de pixels para rolar
    const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards / 2));

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      // Atualizar botões depois da animação
      setTimeout(updateButtonStates, 300);
    });

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      // Atualizar botões depois da animação
      setTimeout(updateButtonStates, 300);
    });

    // Monitorar scroll manual
    carousel.addEventListener("scroll", () => {
      updateButtonStates();
    });

    // Inicializar estado dos botões
    updateButtonStates();

    // Atualizar ao redimensionar janela
    window.addEventListener("resize", () => {
      updateButtonStates();
    });
  });