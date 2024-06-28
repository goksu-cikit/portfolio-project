document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#A9A9A9", "#B0C4DE", "#D3A4B8", "#B0E0E6", "#D8BFD8", "#EEE8AA", "#F4A460", "#C4A484"];
    const letters = document.querySelectorAll(".title span");
    
    letters.forEach((letter, index) => {
        letter.style.color = colors[index % colors.length]; // Farklı renkler uygulama
        letter.style.transition = "transform 0.3s ease, color 0.3s ease"; // Mouseover'da hızlı animasyon
        
        letter.addEventListener("mouseover", () => {
            letter.style.transform = "scale(1.25)";
        });
        letter.addEventListener("mouseout", () => {
            letter.style.transition = "transform 1s ease, color 1s ease"; // Mouseout'da yavaş animasyon
            letter.style.transform = "scale(1)";
            setTimeout(() => {
                letter.style.transition = "transform 0.3s ease, color 0.3s ease"; // Eski animasyon süresine geri dön
            }, 1000);
        });
    });
});