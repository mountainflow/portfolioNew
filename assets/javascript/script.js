$(document).ready(function () {
    // Materialize carousel ===============================
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
    });
    $('.fa-chevron-circle-left').on('click', function() {
        $('.carousel').carousel('prev');
    })
    $('.fa-chevron-circle-right').on('click', function () {
        $('.carousel').carousel('next');
    })















});