$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            center: true,
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            responsive:{
                600:{
                    items:4
                }
            }
        }
    );
  });


  document.addEventListener("DOMContentLoaded", function (){
    var owl = $('#home');
    owl.owlCarousel({
        loop:true,
        margin:10,
        items:1,
        center: true,
        autoplay:true,
                autoplayTimeout:1000,
                autoplayHoverPause:true,
                responsive:{
                    600:{
                        items:4
                    }
                }
    });
    
    window.changedata = function(id){
        var home = document.getElementById(id);
        var exterior = home.getElementsByTagName('div');
        owl.trigger('destroy.owl.carousel');
        owl.html(exterior);
        owl.owlCarousel({
            loop:true,
            margin:10,
            items:1,
            center: true,
            autoplay:true,
                autoplayTimeout:1000,
                autoplayHoverPause:true,
                responsive:{
                    600:{
                        items:4
                    }
                }
        });
    
    };
    
    });

    document.addEventListener("DOMContentLoaded", function() {
        const openFormButton = document.getElementById('open-form');
        const contactForm = document.getElementById('contact-form');
        const background = document.getElementById('background');
    
        openFormButton.addEventListener('click', function() {
            // Show the contact form and background
            contactForm.classList.add('visible');
            background.style.display = 'block';
        });
    
        // Optional: Close the form when clicking outside of it
        background.addEventListener('click', function() {
            contactForm.classList.remove('visible');
            background.style.display = 'none';
        });
    
        // Prevent clicks within the form from closing it
        contactForm.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    
// script.js

// Get the button element
var btn_contact = document.getElementById('myButton');

// Add click event listener to the button
btn_contact.addEventListener('click', function() {
    alert('Button clicked!');
});

document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('.navbar-nav');

    navbarToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
    });
});
