const apiurl = 'https://jsonplaceholder.typicode.com/users'
const robotCardContainer = document.getElementById('robot-cards')
const searchInput = document.getElementById('search')

fetch(apiurl)
  .then(response => response.json())
  .then(data => {
    creatRobotCards(data)
  }).catch(error => console.error('Error fetching data:', error))

function creatRobotCards(data) {
    data.forEach((robot) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = `https://robohash.org/${robot.id}?set=set2`
        img.alt = robot.name;

        const name = document.createElement('h2')
        name.textContent = robot.name;

        const email = document.createElement('p')
        email.textContent = robot.email;

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(email)

        robotCardContainer.appendChild(card)
    })
        
    
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase()
        const email = card.querySelector('p').textContent.toLowerCase()

        if (name.includes(searchTerm) || email.includes(searchTerm)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }    }) 
})