const body = document.body

const sideBar = document.createElement('div')
sideBar.classList.add('sideBar')
body.appendChild(sideBar)

const main = document.createElement('div')
main.classList.add('main')
body.appendChild(main)

const home = document.createElement('button')
const bio = document.createElement('button')
const project = document.createElement('button')
const contact = document.createElement('button')
sideBar.appendChild(home)
sideBar.appendChild(bio)
sideBar.appendChild(project)
sideBar.appendChild(contact)