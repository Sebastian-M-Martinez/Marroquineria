let currentTestimonios = 1;

function toggleTestimonios() {
    const testimonios = [document.getElementById("testimonio1"), 
                        document.getElementById("testimonio2"), 
                        document.getElementById("testimonio3")];

    testimonios[currentTestimonios - 1].style.display = "none";
    currentTestimonios = (currentTestimonios % 3) + 1;
    testimonios[currentTestimonios - 1].style.display = "block";
}