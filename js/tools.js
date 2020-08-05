window.addEventListener("load", function(){
    document.querySelectorAll('.animated').forEach(function(item){
        var delay = item.getAttribute("data-delay");

        if (delay == null) {
            delay = 0;
        }

        if (item.getAttribute("data-scroll") == 0 || item.getAttribute("data-scroll") == null){
            setTimeout(function() {
                item.classList.add('in');
            }, delay);
        }
    });
});

window.addEventListener("scroll", function(){
    document.querySelectorAll('.animated').forEach(function(item){
        var position = item.offsetTop;
        var delay = item.getAttribute("data-delay");
        if (delay == null) {
            delay = 0;
        }

        function scrollBottom(){
            return document.height - item.scrollTop - item.clientHeight;
        }

        var topOfWindow = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        var bottomOfWindow = window.pageYOffset || document.documentElement.scrollHeight || document.body.scrollHeight || 0;

        if(item.getAttribute("data-scroll") != 0 && item.getAttribute("data-scroll") != null){
            if (position < topOfWindow + 700 || position == bottomOfWindow) {
                setTimeout(function() {
                    item.classList.add('in');
                }, delay);
            }
        }
    });
});

// $(window).scroll(function() {
//     $('.animated').each(function() {
//         // var position = $(this).offset().top;
//         // var delay = $(this).data("delay")
//         // var item = $(this)
//         // if (delay == null) {
//         //     delay = 0;
//         // }
//         // $.fn.scrollBottom = function() {
//         //     return $(document).height() - this.scrollTop() - this.height();
//         // };
//         // var topOfWindow = $(window).scrollTop();
//         // var bottomOfWindow = $(window).scrollBottom();

//         if ($(this).data("scroll") != 0 || $(this).data("scroll") != null) {
//             if (position < topOfWindow + 700 || position == bottomOfWindow) {
//                 setTimeout(function() {
//                     item.addClass('in');
//                 }, delay);
//             }
//         }
//     });
// });
