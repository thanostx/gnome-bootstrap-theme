var searchbar = $('.js-search');
$('.js-search-toggle').on('click', function () {
    searchbar.parent().toggleClass('is-visible'),
    setTimeout(function () {
      searchbar.focus()
    }, 350)
});
