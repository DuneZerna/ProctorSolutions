$(document).ready(function () {

    var introStringArray = ["H", "V", "E", "M", "&nbsp", "E", "R", "&nbsp", "V", "I", "?"];
    var pStringArray = ["Vi", "&nbsp", "laver", "&nbsp", "unikke", "&nbsp","fortællende", "&nbsp","hjemmesider", "&nbsp","med", "&nbsp","et","&nbsp", "twist", "<br>", "Følg pilen for at gå videre"];
    
    var dZerna = ["Dune", "Zerna"];
    var jAbdulkarim = ["Jamila", "Abdulkarim"];


    introStringArray.forEach(function (item) {
        $(".intro_text").append("<li>" + item + "</li>");
    });
    
    pStringArray.forEach(function (item){
        $(".p_text").append("<li>" + item + "</li>");
    });
    
    dZerna.forEach(function (item){
        $(".part1").append("<li>" + item + "</li>");
    });
    
    jAbdulkarim.forEach(function (item){
        $(".part2").append("<li>" + item + "</li>");
    });


    $(".content").css("display", "none");
    $("footer").css("display", "none");
    



});    

$(function () {
    var hoverOnce = false;
    var introContent = $(".p_text");
    introContent.hover(function () {

        if (hoverOnce == false) {
            $(".content").css("display", "block");
            $("footer").css("display", "block");
            $(".content").fadeIn();
            introContent.fadeOut();
            $(".intro_text").fadeOut();
            
            
        }

    });

});

// Fade when scrolling function

$(function () {
    var introContent = $(".intro_text");
    var documentEl = $(document),
        fadeElem = $('.fade-scroll');

    documentEl.on('scroll', function () {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function () {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) {
                $this.css('opacity', 1 - (currScrollPos - elemOffsetTop) / 400);
                $this.css('zIndex', '60');
                setTimeout(function () {
                    $('.fly-in-text').removeClass('hidden');
                }, 1000);
            }


        });
    });
});

// Fade when scrolling function variation

$(function () {
    var documentEl2 = $(document),
        fadeElem2 = $('.fade-scroll2');

    documentEl2.on('scroll', function () {
        var currScrollPos2 = documentEl2.scrollTop();

        fadeElem2.each(function () {
            var $this = $(this),
                elemOffsetTop2 = $this.offset().top;
            if (currScrollPos2 > elemOffsetTop2) $this.css('opacity', 1 - (currScrollPos2 - elemOffsetTop2) / 30)
        });
    });
});
