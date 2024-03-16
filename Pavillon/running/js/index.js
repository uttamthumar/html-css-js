$(window).on("load", function () {
  $("#loading").css("transition", "all ease-in-out 0.3s");
  $("#loading").css("transform", " rotate(1turn)");
  $("#loading").hide(2000);
});
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(".slick-prev").hide();
$(".slider").slick({
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
});
$(function () {
  $(".slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 0.96,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// stckey navbar
$(document).ready(function () {
  $(window).scroll(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var width = $(window).width();
      if (scroll > 200) {
        $(".dropup-content1").css("display", "none");
      } else {
        $(".dropup-content1").css("display", "");
      }
    });
    var scroll = $(window).scrollTop();

    if (scroll > 200) {
      $(".navbar").css("background", "#1D1D1D");
      $(".navbar").css("height", "130px");
      $(".Logo").css("height", "85px");
      $(".Logo").css("transition", "all ease-in-out 0.3s");
      // $(".navbar").css ("transition", "all ease-in-out 1s")
    } else {
      $(".navbar").css("background", "none");
      $(".navbar").css("height", "200px");
      $(".Logo").css("height", "135px");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
      $("#myBtn").css("display", "none");
      $("#myBtn1").css("display", "none");
    } else {
      $("#myBtn").css("display", "");
      $("#myBtn1").css("display", "");
    }
  });
});
$(".slider1").slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: false,
  arrows: true,
  autoplaySpeed: 2000,
});

$(document).ready(function () {
  var imgPopup = $(".img-popup");
  var imgCont = $(".container__img-holder");
  var popupImage = $(".img-popup img");
  var closeBtn = $(".close-btn");
  var text = $(".text1");

  imgCont.on("click", function () {
    var img_src = $(this).children("img").attr("src");
    // imgPopup.children('.show').html($(text));
    imgPopup.children("img").attr("src", img_src);

    imgPopup.addClass("opened");
  });

  $(imgPopup, closeBtn).on("click", function () {
    imgPopup.removeClass("opened");
    imgPopup.children("img").attr("src", "");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
});

// window.addEventListener('scroll',() =>{
//   const scrollable = document.documentElement.scrollHeight - window.innerHeight ;
//  const scrolled = window.scrollY;

//   if(Math.floor(scrolled === scrollable)){
//     alert("you reach bottom")
//   }

// })
