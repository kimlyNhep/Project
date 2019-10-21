$(document).ready(function() {
  $("#a").click(function(e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });
  $("#b").click(function(e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });
  $("#c").click(function(e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });
  $("#img-id").hover(function() {
    var img = document.getElementById("img-id");
    //or however you get a handle to the IMG
    var height = img.height;
    console.log(height);
    $(".icon-container").css("top", height / 2 + 220);
    $(".icon-container").css("display", "flex");
  });
  $("#img-id").mouseleave(function() {
    $(".icon-container").css("display", "none");
  });
});
