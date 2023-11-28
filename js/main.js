(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
          
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);



// slick slider code
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    centerPadding: '60px',
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// Range slider code

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

var slider1 = document.getElementById("myAmount");
var output1 = document.getElementById("selectedAmount");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `linear-gradient(90deg, #000000 ${percentage}%, transparent ${percentage}%)`;
}

function updateGradient1(rangeValue) {
    const percentage = (rangeValue - slider1.min) / (slider1.max - slider1.min) * 100;
    slider1.style.backgroundImage = `linear-gradient(90deg, #000000 ${percentage}%, transparent ${percentage}%)`;
}

// Update gradient onload
updateGradient1(slider1.value);
updateGradient(slider.value);

// Update gradient oninput
slider.addEventListener('input', (e) => {
    output.innerHTML = e.target.value;
    updateGradient(e.target.value);
});


// Update gradient oninput
slider1.addEventListener('input', (e) => {
    output1.innerHTML = e.target.value;
    updateGradient1(e.target.value);
});