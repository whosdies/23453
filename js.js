let slideindex = 0;
showslide(slideindex);

function moveslide(n){
    showslide(slideindex += n);
}

function currentSlide(n) {
    showslide(slideindex = n);
}


function showslide(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n >= slides.length){
        slideindex = 0
    }
    if(n < 0){
        slideindex = slides.length -1;
    }

    for( i=0; i < slides.length; i++){
        slides[i].style.display = "none";
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideindex].style.display = "block"
    dots[slideindex].className += " active";
}

var acc = document.getElementsByClassName("accardeon");
for (var i=0; 1 < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("accardeon-active");
        var acc_panel = this.nextElementSibling;
        if(acc_panel.style.maxHeight){
            acc_panel.style.maxHeight = null;

        }
        else{
            acc_panel.style.maxHeight = acc_panel.scrollHeight + "px";
        }
    })
    
}


