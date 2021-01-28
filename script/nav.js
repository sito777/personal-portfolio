// The arrow animation script
$(window).scroll(function (event) 
{
  var scroll_client     = $(window).scrollTop();
  var catogorie_height  = $( ".img-fluid" ).height();

  if ( scroll_client < catogorie_height ) 
  {
    document.getElementsByClassName("bg-light").style.opacity = "0.0";
    // $(".bg-light").style.opacity = "0.5";
    
  } else
  if ( scroll_client > catogorie_height )
  {
    
    $(".bg-light").show(document.getElementsByClassName("bg-light").style.opacity = "0.0");

  }

});
