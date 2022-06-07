$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var s1 = $("#s1").height() +70;
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
  
//   gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });


  gsap.registerPlugin(ScrollTrigger);
  // REVEAL //
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: true,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });







//   var text = ["Relax with family at home.","Impress your clients at office", "Take a nap on flight"];
//   var counter = 0;
//   var elem = document.getElementById("changeText");
//   setInterval(change, 3000);
  
//   function change() {
//       elem.classList.add('hide');
//       setTimeout(function () {
//           elem.innerHTML = text[counter];
//           elem.classList.remove('hide');
//           counter++;
//           if (counter >= text.length) {
//               counter = 0;
//           }
//       }, 500);
//   }