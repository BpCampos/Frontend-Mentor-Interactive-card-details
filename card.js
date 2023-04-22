const number = document.getElementById('number')
const name = document.getElementById('name')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

const numberInput = document.getElementById('numberInput')
const nameInput = document.getElementById('nameInput')
const monthInput = document.getElementById('monthInput')
const yearInput = document.getElementById('yearInput')
const cvcInput = document.getElementById('cvcInput')

const numberError = document.getElementById('numberError')
const nameError = document.getElementById('nameError')
const monthError = document.getElementById('monthError')
const yearError = document.getElementById('yearError')
const cvcError = document.getElementById('cvcError')

const cardForm = document.querySelector('.card-info-form')
const cardInfo = document.querySelector('.card-info')
const cardAdded = document.querySelector('.cardAdded')
const confirm = document.getElementById('confirm')
const continueButton = document.getElementById('continue')



cardForm.addEventListener('input', () => {
    number.innerHTML = numberInput.value.replace(/ /g, '&nbsp;') || 'NUMBER'
    name.textContent = nameInput.value || 'NAME'
    month.textContent = monthInput.value || 'MM'
    year.textContent = yearInput.value || 'YY'
    cvc.textContent = cvcInput.value || 'CVC'
    if (monthInput.value !== '') {
        month.style.marginLeft = '18px'
    } else {
        month.style.marginLeft = '0px'
    }
})

numberInput.addEventListener('input', (event) => {
    const cardNumber = event.target.value.replace(/\D/g, '');
    const cardNumberWithSpaces = cardNumber.replace(/(\d{4})(?!$)/g, '$1 ');
    event.target.value = cardNumberWithSpaces

});

confirm.addEventListener('click', (e) => {
    if (validateForm(e) == true) {
        e.preventDefault()
        cardInfo.classList.add('finished')
        cardAdded.classList.toggle('finished')
    }

})

continueButton.addEventListener('click', (e) => {
    cardInfo.classList.toggle('finished')
    cardAdded.classList.toggle('finished')
    numberInput.value == ''
    nameInput.value == ''
    monthInput.value == ''
    yearInput.value == ''
    cvcInput.value == ''
})


function validateForm(e) {
    if (numberInput.value == '' || nameInput.value == '' || monthInput.value == '' || yearInput.value == '' || cvcInput.value == '') {
        e.preventDefault()

        if (numberInput.value == '') {
            numberError.innerHTML = 'Cannot be empty'
            numberInput.classList.add('error')
        }
        if (nameInput.value == '') {
            nameError.innerHTML = 'Cannot be empty'
            nameInput.classList.add('error')
        }
        if (monthInput.value == '') {
            monthError.innerHTML = 'Cannot be empty'
            monthInput.classList.add('error')
        }
        if (yearInput.value == '') {
            yearError.innerHTML = 'Cannot be empty'
            yearInput.classList.add('error')
        }
        if (cvcInput.value == '') {
            cvcError.innerHTML = 'Cannot be empty'
            cvcInput.classList.add('error')
        }
    } else {
        return true
    }

}

