var butoane = document.getElementsByClassName("accordion");
for (var i = 0; i < butoane.length; i++) {
    butoane[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sertar = this.nextElementSibling;
        if (sertar.style.display === "block") {
            sertar.style.display = "none";
        } else {
            sertar.style.display = "block";
        }
    });
}