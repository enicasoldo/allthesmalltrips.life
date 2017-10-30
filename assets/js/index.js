(function ($) {
  "use strict";

  $(document).ready(function(){

    $(".post-content").fitVids();

    // Calculates Reading Time
    $('.post-content').readingTime({
      readingTimeTarget: '.post-reading-time',
      wordCountTarget: '.post-word-count',
    });

    // Creates Captions from Alt tags
    $(".post-content img").each(function() {
      // Let's put a caption if there is one
      if($(this).attr("alt") && !$(this).hasClass("emoji"))
      $(this).wrap('<figure class="image"></figure>')
      .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
    });

    function initHeadroom() {
      var myElement = document.querySelector(".js--headroom");
      var headroom  = new Headroom(myElement);
      headroom.init();
      $(document).off('scroll', initHeadroom);
    }

    function reinitialize() {
      // reading time
      $('.js--reading-time').each(function() {
        var $this = $(this);
        var wpm = 275;
        var words = Number.parseInt($this.data('words'));
        var minutes = Math.floor(words / wpm);
        if (minutes < 1) {
          minutes = 'Less than a';
        }
        $this.text(minutes + ' min read');
      });
    }

    $(document).on('scroll', initHeadroom);
    $(document).on('reinitialize', reinitialize);
    reinitialize();
  });

}(jQuery));
