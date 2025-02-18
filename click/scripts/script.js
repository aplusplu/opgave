/* FAVRESKIFT */

let body = document.querySelector('body')

let blueBtn = document.querySelector('.blue-btn')

blueBtn.addEventListener('click' , () => {

    body.className =''
    body.classList.add('blue')

})

let heading = document.querySelector('h3')

let englishBtn = document.querySelector(.englishBtn)

englishBtn.addEventListener('click', () = > {
    heading.innerHTML = 'Hello!'
})