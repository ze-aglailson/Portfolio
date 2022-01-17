$(document).ready(function(){
    $(".owl-carousel-servicos-recentes").owlCarousel({
        items:4,
        loop:true,
        dots:true,
        autoplay:false,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items: 2
            },
            520:{
                items:2
            },
            720:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(".owl-carousel-avaliacoes").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        autoplay:false,
        autoplayTimeout:3000

    });
})