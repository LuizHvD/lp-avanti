document.addEventListener("DOMContentLoaded", function () {
  
function initCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId);
    const nextBtn = document.getElementById(nextBtnId);
    const prevBtn = document.getElementById(prevBtnId);
    
  if (!carousel || !nextBtn || !prevBtn) return;

    const carouselWidth = carousel.clientWidth;
    const cardWidth = 200 + 16; m
    const visibleCards = Math.floor(carouselWidth / cardWidth);
    const scrollWidth = carousel.scrollWidth;
    
  function updateButtonStates() {
      prevBtn.disabled = carousel.scrollLeft <= 0;
      
      const maxScrollLeft = scrollWidth - carouselWidth;
      nextBtn.disabled = carousel.scrollLeft >= maxScrollLeft - 5; 
  }
    
  const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards / 2));

  nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateButtonStates, 300);
  });

  prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(updateButtonStates, 300);
  });
    
  carousel.addEventListener("scroll", updateButtonStates);
    
  updateButtonStates();
    
  window.addEventListener("resize", updateButtonStates);
  }

initCarousel("carousel1", "prevBtn1", "nextBtn1");
initCarousel("carousel2", "prevBtn2", "nextBtn2");
});