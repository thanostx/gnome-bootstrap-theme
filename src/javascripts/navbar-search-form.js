var searchbar = $('.js-search');
$('.js-search-toggle').on('click', function () {
    searchbar.parent().closest('div').toggleClass('is-visible'),
    setTimeout(function () {
      searchbar.focus()
    }, 350)
});
