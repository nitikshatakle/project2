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
    

// Get all the buttons and the form
var forms = document.querySelectorAll('.myForm');
var buttons = document.querySelectorAll('[id^="showFormButton"]');

// Add event listeners to each button
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        toggleFormVisibility(forms[index]);
    });
});

// Function to toggle form visibility
function toggleFormVisibility(form) {
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
    modal.style.display = 'none';
}