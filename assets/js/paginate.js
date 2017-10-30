(function ($) {
  "use strict";

  var isLoading = false;
  var currentPage = 1;
  var trigger;

  function handleScroll() {
    if (trigger.offset().top < window.innerHeight + window.scrollY) {
      loadPage();
    }
  }

  function loadPage() {
    isLoading = true;
    currentPage++;
    $.get(blog.url + '/page' + currentPage).then(function(html) {
      $(html).find('article').each(function() {
        trigger.prepend(this);
      })
      isLoading = false;
    }, function() {
      $(document).off('scroll', handleScroll);
    });
  }

  $(document).ready(function(){
    trigger = $('.js--pagination');
    if (trigger.length) {
      $(document).on('scroll', handleScroll);
    }
  });

}(jQuery));
