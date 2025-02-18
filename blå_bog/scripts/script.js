let btnContainer = document.querySelector('.btn-container')
let profileInfo = document.querySelector('.profile-info')

let profiles = [
    
    {
        firstName: 'Dennis',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 0
    },
    {
        firstName: 'Asger',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 1
    },
    {
        firstName: 'Hejdi',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 2
    },
    {
        firstName: 'Ionut',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 3
    },
    {
        firstName: 'Jannik',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 4
    },
    {
        firstName: 'Mai',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 5
    },
    {
        firstName: 'Mette',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 6
    },
    {
        firstName: 'Nauja',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 7
    },
    {
        firstName: 'Oleg',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 8
    },
    {
        firstName: 'Siv',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 9
    },
    {
        firstName: 'Sylvia',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 10
    },
    {
        firstName: 'Wiktor',
        city: 'Viborg',
        img: 'https://picsum.photos/500/700',
        id: 11
    }

]

// Udskriver knapperne med navne
profiles.forEach(profile => {
    btnContainer.innerHTML +=  `<button class="btn-name" id="${profile.id}">${profile.firstName}</button>`
})






function outputProfileInfo(){

}


// indeholde alt sogefunctionalitet

function search(e){

       const searchTerm = e.target.value;
       const category = document.querySelector ('#category').value
       const results = profiles.filter(profile => profile.(category).toLowerCase().includes(searchTerm));

       console.log(results)

       let buttonsHTML = ''
       results.forEach(profile => {
        buttonsHTML += '<button class="btn-name" id="${profile.id}">${profile.firstName}</button>'
       })

       btnContainer.Container.innerHTML = buttonsHTML;
}

const searchbar = document.querySelector('#search')
searchbar.addEventListener('input', search)

let btnNames = document.querySelectorAll('.btn-name')

btnNames.forEach(button => {
    button.addEventListener('click', () => {
        
        let id = button.id

        profileInfo.innerHTML = `
            <p>Navn: ${profiles[id].firstName}</p>
            <p>By: ${profiles[id].city}</p>
        
        `

    })
})