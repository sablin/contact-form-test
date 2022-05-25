

document.addEventListener("DOMContentLoaded", function() {
 //маска телефона
let phoneInput = document.querySelector('.phone');
let maskOptions = {
    mask: '+7(#00)000-00-00',
    lazy: false,
    definitions: {
        '#': /[1,2,3,4,5,6,9]/
      }
} 
let mask = new IMask(phoneInput, maskOptions);

// маска email
let emailInput = document.getElementById('email');
let maskOptions2 = {    
    mask:function (value) {
                if(/^[a-z0-9_\.-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                    return true;
                return false;
                    },
    lazy: false
} 
var mask2 = new IMask(emailInput, maskOptions2);


// обработка отправки формы
document.querySelector('.contact-form').addEventListener('submit', (e) =>{
e.preventDefault();
const name = document.querySelector('.name').value;
const phone = document.querySelector('.phone').value;
const city = document.querySelector('.city').value;
const email = document.querySelector('.email').value;
const comType = document.querySelector('.com-type').value;
const textInfo = document.querySelector('.text-info').value;
const subject = document.querySelector('.subject').value
const formData = {
    name, phone, city, email, comType, textInfo
}


fetch('/feedback', formData)
    .then(res => {
        alert('Все работает');
        e.target.reset();
    })
    .catch( res => alert(res))
})

});
