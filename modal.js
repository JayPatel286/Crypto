const openModalButton = document.querySelector('[data-modal-target]')
const closeModalButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')
const modal = document.querySelector('.modal')
const in_type = document.getElementById("in_type")
const out_type = document.getElementById("out_type")

openModalButton.addEventListener('click', () => {
    modal.classList.add('active')    
    overlay.classList.add('active')    
})

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')    
})


const optionButtons = document.querySelectorAll('.option')
const openButton = document.getElementById('sel_option')
const allmenus = document.querySelectorAll('.myMenu')
const rev_menu = document.querySelector('.reverse_menu')
const rep_menu = document.querySelector('.replace_menu')
const case_menu = document.querySelector('.case_menu')
const number_menu = document.querySelector('.number_menu')

optionButtons.forEach(o => {
    o.addEventListener('click', () => {
        openButton.innerText = o.innerText
        if (openButton.innerText == "Replace") {
            allmenus.forEach(m => {
                m.classList.remove('selected__')
            })
            rep_menu.classList.add('selected__')
            in_type.innerText = "Text"
            out_type.innerText = "Text"
        }
        else if (openButton.innerText == "Reverse") {
            allmenus.forEach(m => {
                m.classList.remove('selected__')
            })
            rev_menu.classList.add('selected__')
            in_type.innerText = "Text"
            out_type.innerText = "Text"
        }
        else if (openButton.innerText == "Case Transform") {
            allmenus.forEach(m => {
                m.classList.remove('selected__')
            })
            case_menu.classList.add('selected__')
            in_type.innerText = "Text"
            out_type.innerText = "Text"
        }
        else if (openButton.innerText == "Number System") {
            allmenus.forEach(m => {
                m.classList.remove('selected__')
            })
            number_menu.classList.add('selected__')
            in_type.innerText = "Number"
            out_type.innerText = "Number"
        }
        modal.classList.remove('active')    
        overlay.classList.remove('active')  
    })
});

const booleans = document.querySelectorAll('.boolean_choice')
const yesBool = document.querySelector('.yesOp')
const noBool = document.querySelector('.noOp')

booleans.forEach(b => {
    b.addEventListener('click', () => {
        if (b.classList.contains('yesOp')) {
            noBool.classList.remove('sel_boolean')
            yesBool.classList.add('sel_boolean')
        }
        else if (b.classList.contains('noOp')) {
            noBool.classList.add('sel_boolean')
            yesBool.classList.remove('sel_boolean')
        }
    })
})