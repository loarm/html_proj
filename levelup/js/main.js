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
      if (count > 0) {
        $(this).html(count - 1);
      } else {
        dec_min();
      }
    });
  };
  setInterval(Update, 1000);
});

var _Seconds = $(".seconds").text(),
  int;

int = setInterval(function () {
  // запускаем интервал
  if (_Seconds !== 0) {
    _Seconds--; // вычитаем 1
    $(".seconds").text(_Seconds); // выводим получившееся значение в блок
  } else {
    clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
    dec_min();
    setInterval(int);
  }
}, 1000);
