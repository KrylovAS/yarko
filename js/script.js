
(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });

    $('.menu__link').on('click', function () {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});




