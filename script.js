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

}

photos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");

        showPhoto(index);

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
