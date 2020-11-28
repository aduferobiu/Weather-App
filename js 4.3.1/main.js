$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
})

$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});