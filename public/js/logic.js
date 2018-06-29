/* eslint-env browser, jquery */

$(document).ready(() => {
  $('form').submit(function (event) {
    event.preventDefault();

    const name = $(this).find('input[type=text]')[0].value;

    $.ajax({
      method: 'POST',
      url: '/api/add',
      data: { name },
    }).then(() => window.location.reload());
  });

  $('.devour').click(function (event) {
    event.preventDefault();

    const id = $(this).attr('burger_id');

    $.ajax({
      method: 'PUT',
      url: '/api/eat',
      data: { id },
    }).then(() => window.location.reload());
  });
});

