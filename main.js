$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var s1 = $("#s1").height() +130;
        var s2 = $("#s2").height();
        var s3 = $("#s3").height();
        var s4 = $("#s4").height();
        var s5 = $("#s5").height();
        var s6 = $("#s6").height();
       
        if (scroll > (s1+s2+s3+s4+s5+s6))  {
            $("nav").css("background" , "#000");
        }else if (scroll >  (s1+s2+s3+s4+s5)) {
          $("nav").css("background" , "#F26868");
        }else if (scroll >  (s1+s2+s3+s4)) {
            $("nav").css("background" , "#000");
        }else if (scroll >  (s1+s2+s3)) {
            $("nav").css("background" , "#F26868");
        }else if (scroll >  (s1+s2)) {
            $("nav").css("background" , "#000");
        }else if (scroll >  (s1)) {
            $("nav").css("background" , "#F26868");
        } else{
            $("nav").css("background" , "#000");  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var se1 = $("#se1").height() - 70;
        var se2 = $("#se2").height() ;
       
        if (scroll >  (se1)) {
            $("nav").css("background" , " #F26868");
        } 
    })
  })