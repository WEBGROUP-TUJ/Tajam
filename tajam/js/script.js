$(".circle").on("mouseenter", function () {
    $(".greenh3").css("color", "#21d601");
})
$(".circle").on("mouseleave", function () {
    $(".greenh3").css("color", "white");
})

$(".circle").on("click", function (e) {
    e.preventDefault();
    $(".scroll").slideToggle();
})


$(".person img").on("mouseenter", function () {
    $(this).parent().parent().css("background", "linear-gradient(to right,#46a3cc,#30235f)");
})
$(".person img").on("mouseleave", function () {
    $(this).parent().parent().css("background", "none");
})







