(() => {
  const invoice = () => {
    const popupWindow = $('<div class="popup-overlay js-window">' +
      '<div class="popup-window js-popup" style="display: none;">' +
      '<div class="popup-window__body">' +
      '<div class="wrapper1">' +
      '<div class="wrapper1">' +
      '<div class="check"></div>' +
      '<p class="invoice">Спасибо!</p>' +
      '<p class="invoice">Ваша заявка отправлена.</p>' +
      '<p class="invoice">В ближайшее время мы с Вами свяжемся!</p>' +
      '</div>' +
      '</div></div>' +
      '</div>' +
      '</div>' +
      '</div>');
    $('body').prepend(popupWindow);
    $('.js-popup').slideDown('slow');
    $('.js-window').click(function (event) {
      $(this).remove();
    })
  };
  
  //Random hash generator
  function generateHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  //Sales-g-sender
  function sgSender(fieldsObj, type) {
    const fields = fieldsObj;
    let dataString = `type=${type}`;
    
    for (let field in fields) {
      dataString += `&${field}=${fields[field]}`
    }
    
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: dataString
    }).done(json => {
      console.log(JSON.parse(json));
    }).fail(error => console.log(error));
  }
  //Callback form
  $('#uid7').click(function (event) {
    event.preventDefault();
    
    const form = $('#callback-form'),
      COMMENT = 'Заказ обратного звонка',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'callback-top');
          $('.area').click();
          console.log(json);
          invoice();
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  
  //Get tires
  $('#uid20').click(function (event) {
    event.preventDefault();
    
    const form = $('#get-tyres'),
      COMMENT = 'ЗАПИСАТЬСЯ НА ШИНОМОНТАЖ В УДОБНОЕ ВРЕМЯ',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'get-tyres');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  })
  //Left widget form
  $('#uid4').click(function (event) {
    event.preventDefault();
    
    const form = $('#left-widget-form'),
      COMMENT = 'Запись на шиномонтаж',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'left-widget-get-tyres');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  
  // Get tyres 3 screen
  $('#uid25').click(function (event) {
    event.preventDefault();
    
    const form = $('#second-get-tyres-form'),
      COMMENT = 'Запись на шиномонтаж',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'get-tyres');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  //Check variants from
  $('#uid30').click(function (event) {
    event.preventDefault();
    
    const form = $('#check-variants'),
      COMMENT = 'Подбор дисков по марке авто',
      car = form.find('select[name=car]'),
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&brand=${car.val()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val(), car: car.val()}, 'check-variants');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  //Tire fitting
  $('#uid40').click(function (event) {
    event.preventDefault();
    
    const form = $('#tire-fitting'),
      COMMENT = 'Заявка на хранение шин',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'tire-fitting');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  //Store amount
  $('#uid50').click(function (event) {
    event.preventDefault();
    
    const form = $('#store-amount'),
      COMMENT = 'Запись на шиномонтаж',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'store-amount');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  $('#uid85').click(function (event) {
    event.preventDefault();
    
    const form = $('#store-amount-two'),
      COMMENT = 'Запись на шиномонтаж',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'store-amount');
          $('.area').click();
          invoice();
          console.log(json);
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
  //callback-bottom
  $('#uid53').click(function (event) {
    event.preventDefault();
    
    const form = $('#callback-bottom'),
      COMMENT = 'Заказ обратного звонка',
      phone = form.find('input[name=phone]');
    
    if (phone.val()) {
      $.ajax({
        url: 'https://wilgood.ru/handler_for_partners/',
        type: 'POST',
        data: `type_partner=${generateHash()}&comment=${COMMENT}&type_response=html&phone=${phone.val()}&unique_code=Agf0FDw6gkRuqsfOQB7cqK9k60qD17f`
      }).done(json => {
        if (json) {
          sgSender({phone: phone.val()}, 'callback-bottom');
          $('.area').click();
          console.log(json);
          invoice();
          phone.val('');
        }
      }).fail(error => console.log(error));
    }
  });
})();