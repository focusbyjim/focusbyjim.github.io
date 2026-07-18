<script>

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

</script>
    <div class="lightbox" id="lightbox">

    <span class="close">&times;</span>

    <span class="prev">&#10094;</span>

    <img class="lightbox-img">

    <span class="next">&#10095;</span>

    <div class="counter"></div>

</div>
    <script>

const photos=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.querySelector(".lightbox-img");

const closeBtn=document.querySelector(".close");

const nextBtn=document.querySelector(".next");

const prevBtn=document.querySelector(".prev");

const counter=document.querySelector(".counter");

let current=0;
let uiTimeout;
        
function showUI(){

    lightbox.classList.add("show-ui");

    clearTimeout(uiTimeout);

    uiTimeout=setTimeout(()=>{

        lightbox.classList.remove("show-ui");

    },2000);

}

function showPhoto(index){

    current=index;

    lightboxImg.src=photos[current].src;

    counter.textContent=(current+1)+" / "+photos.length;

}

photos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");

        showPhoto(index);
        showUI();

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

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        closeBtn.click();

    }
lightbox.addEventListener("mousemove",()=>{

    showUI();

});

}

</script>
