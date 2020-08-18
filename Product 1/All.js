//幻燈片
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});


//卷軸向下滑動，NAV自動收起來

var bodyClass = document.body.classList,
lastScrollY = 0;
window.addEventListener('scroll', function () {
    var st = this.scrollY;
    if (st < lastScrollY) {
        bodyClass.remove('hideUp');
    } else {
        bodyClass.add('hideUp');
    }
    lastScrollY = st;

})
