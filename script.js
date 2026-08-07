const lightboxBg = document.getElementById("lightbox-bg");

const counter = document.getElementById("counter");

let hideTimer;
const photos = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let current = 0;

function showPhoto(index){

    current = index;

    lightboxImg.src = photos[current].src;

    lightboxBg.style.backgroundImage =
        `url(${photos[current].src})`;

    counter.textContent =
        (current + 1) + " / " + photos.length;

}
function showControls(){

    lightbox.classList.remove("hide-ui");

    clearTimeout(hideTimer);

    hideTimer = setTimeout(()=>{

        lightbox.classList.add("hide-ui");

    },2500);

}

photos.forEach((photo,index)=>{

photo.addEventListener("click",()=>{

    lightbox.classList.add("active");

    showPhoto(index);

    showControls();

});
});

closeBtn.onclick=()=>{

    lightbox.classList.remove("active");

}

nextBtn.onclick=()=>{

    current=(current+1)%photos.length;

    showPhoto(current);

}

prevBtn.onclick=()=>{

    current=(current-1+photos.length)%photos.length;

    showPhoto(current);

}

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight") nextBtn.click();

    if(e.key==="ArrowLeft") prevBtn.click();

    if(e.key==="Escape") closeBtn.click();

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeBtn.click();

    }

});
lightbox.addEventListener("mousemove",()=>{

    showControls();

});
