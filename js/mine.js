
let secondSection = $("#about").offset().top // to get the element top position
// let thirdSection = $("#services").offset().top


$(window).scroll(function () 
{ 
    let scrollvalue = $(window).scrollTop(); // to get scroll value

    if(scrollvalue >= secondSection)
    {
        $(".navbar").removeClass("bg-transparent");
        $(".navbar").addClass("bg-dark")
        $(".nav-link").addClass("text-white")
        
    }
    else
    {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-dark")
        $(".nav-link").removeClass("text-white")
    }
});


$(".navbar a").click(function()
{
    let ahref = $(this).attr("href");
    let sectionPosition = $(ahref).offset().top;
    $("html , body").animate({scrollTop:sectionPosition},1000)
})
