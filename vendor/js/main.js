 $(function () {
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
             } else {
                 this.css('opacity', 1);
             }
                 

         });
     });
 });

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
