// if (window.location.pathname === '/index.html') {
//   const inputName = document.querySelector('.form-request__input');
//   const phone = document.querySelector('.form-request__input.phone');
//   const btn = document.querySelector('.form-request__btn');

//   inputName.addEventListener('input', handleInput);
//   phone.addEventListener('input', handleInput);

//   const btn2 = document.querySelector('.popup__btn');
//   const phone2 = document.querySelector('.popup__input');
//   phone2.addEventListener('input', (e) => {
//     e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     btn2.disabled = e.target.value.length !== 16 
//   });

//   function handleInput(e) {
//     if (e.target === phone) e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     if (e.target === inputName) e.target.value = nameMask(e.target.value)

//     if (inputName.value.length >= 3 && phone.value.length === 16) {
//       btn.disabled = false;
//     } else btn.disabled = true;
//   }
// }

// if (window.location.pathname === '/services.html') {
//   //тут код для странички сервисов, но это все дикие костыли, нужно или дальше разбираться как в одном файле делать или разбираться с галпом
//   const btn3 = document.querySelector('.consultation__btn');
//   const phone3 = document.querySelector('.consultation__input');
//   phone3.addEventListener('input', (e) => {
//     e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     btn3.disabled = e.target.value.length !== 16
//   });

//   function handleInput(e) {
//     if (e.target === phone) e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     if (e.target === inputName) e.target.value = nameMask(e.target.value)

//     if (inputName.value.length >= 3 && phone.value.length === 16) {
//       btn.disabled = false;
//     } else btn.disabled = true;
//   }

// }

// if (window.location.pathname === '/price.html') {
//   //тут код для странички сервисов, но это все дикие костыли, нужно или дальше разбираться как в одном файле делать или разбираться с галпом
//   const btn3 = document.querySelector('.consultation__btn');
//   const phone3 = document.querySelector('.consultation__input');
//   phone3.addEventListener('input', (e) => {
//     e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     btn3.disabled = e.target.value.length !== 16
//   });

//   function handleInput(e) {
//     if (e.target === phone) e.target.value = `+7 ${phoneMask(e.target.value.slice(2))}`
//     if (e.target === inputName) e.target.value = nameMask(e.target.value)

//     if (inputName.value.length >= 3 && phone.value.length === 16) {
//       btn.disabled = false;
//     } else btn.disabled = true;
//   }

// }

// function phoneMask(phone) {
//   return phone.replace(/\D/g, '')
//     .replace(/^(\d{3})(\d)/, '$1 $2')
//     .replace(/(\d{3})(\d)/, '$1-$2')
//     .replace(/(-\d{2})(\d)/, '$1-$2')
//     .replace(/(-\d{2}-\d{2})\d+?$/, '$1');
// }

// function nameMask(name) {
//   return name.replace(/[^(\p{L}|\d)]/gu, '')
// }





function toggleButton() {
  var username = document.getElementById('username').value;
  var tel = document.getElementById('tel').value;
  
  if (username && tel) {
    document.getElementById('submitButton').disabled = false;
  } else {
    document.getElementById('submitButton').disabled = true;
  }
}


function toggleButton() {
  var phone = document.querySelector('.phone').value;

  if (phone) {
    document.querySelector('.button').disabled = false;
  } else {
    document.querySelector('.button').disabled = true;
  }

}



$(function () {
  $('.services__btn').on('click', function () {
    $('.services__items-max').addClass('services__items-max--active');
    $('.services__items-min').addClass('services__items-max--disactive');
  });

  $('.form-request__btn').on('click', function (e) {
    e.preventDefault();
    $('.form-request').addClass('form-request--none');
    $('.form-next').addClass('form-request--active');

  });

  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.phone').mask('+7(999)999-9999');



  // function toggleButton() {
  //   var username = $('.phone').val();

  //   if (username) {
  //     $('.button').attr('disabled', false);
  //   } else {
  //     $('.button').attr('disabled', true);
  //   }
  // };
});

