document.querySelector(".checkbox").addEventListener('click', function () {
    if (checkbox.checked) {
        document.querySelector('.price-total1').innerText = "400$"
        document.querySelector('.price-tarif1').innerText = "/год"

        document.querySelector('.price-total2').innerText = "500$"
        document.querySelector('.price-tarif2').innerText = "/год"

        document.querySelector('.price-total3').innerText = "600$"
        document.querySelector('.price-tarif3').innerText = "/год"
    }

    else {
        document.querySelector('.price-total1').innerText = "50$"
        document.querySelector('.price-tarif1').innerHTML = "/месяц"

        document.querySelector('.price-total2').innerText = "75$"
        document.querySelector('.price-tarif2').innerHTML = "/месяц"

        document.querySelector('.price-total3').innerText = "100$"
        document.querySelector('.price-tarif3').innerHTML = "/месяц"
    }
})

function menuHamb() {
    var menu = document.querySelector('.nav__hamb-menu')
    menu.classList.toggle("visible")
}

$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.content'),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }

            },


            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

}) 