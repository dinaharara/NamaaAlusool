

$('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000000,
    lazyLoad: false,
    nav: false,
    autoplayHoverPause: true,

    items:5,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        400:{
            items:2,
            nav:false,
            dots:false,
        },
        600:{
            items:3,
            nav:false,
            dots:false,
        },
        1000:{
            items:6,
            nav:false,
            dots:false,
            loop:true
        }
    }
    }
);
$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000000,
    lazyLoad: false,
    nav: false,
    autoplayHoverPause: true,

    items:5,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
    }
);
let btn = document.querySelector('.top');

window.onscroll = () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 200) {
        // btn.style.display = 'flex';
        btn.style.bottom = '20px';
    }else {
        // btn.style.display = 'none';
        btn.style.bottom = '-120px';
    }
}

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height)*100}%`;
});


