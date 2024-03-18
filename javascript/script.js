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
                    items:1.25
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
                        items:2
                    }
                }
    });
    
    window.changedata = function(id,el){
        var home = document.getElementById(id);
        var exterior = home.getElementsByTagName('div');
        var buttons = document.querySelectorAll('.btn');
        buttons.forEach(function(el) {
          el.classList.remove('activeBtn');
        });
        el.classList.toggle("activeBtn");
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
                        items:1.5
                    }
                }
        });
    
    };
    
    });


    document.addEventListener('DOMContentLoaded', function () {
        showCarousel('exterior');
    });    
    

// Get all the buttons and the form
var forms = document.querySelector('.myForm');
// console.log(forms);
var buttons = document.querySelectorAll('[id^="showFormButton"]');

// Add event listeners to each button
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        toggleFormVisibility(forms[index]);
    });
});

// Function to toggle form visibility
function toggleFormVisibility(form) {
    var form = document.querySelector(form);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        form.style.display = 'none';
        overlay.style.display = 'none';
    }
}

    
function closeModal() {
    var modal = document.getElementById('modal');
    document.getElementById("overlay").style.display = "none";
    modal.style.display = 'none';
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });