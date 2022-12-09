function dec_min() {
  min = parseInt($(".minutes").html());
  if (min !== 0) {
    $(".minutes").html(min - 1);
    $(".seconds").html(59);
  }
}

$(document).ready(function () {
  var Update = function () {
    $(".seconds").each(function () {
      var count = parseInt($(this.html()));
      if (count !== 0) {
        $(this).html(count - 1);
      } else {
        dec_min();
      }
    });
  };
  setInterval(Update, 1000);
});
