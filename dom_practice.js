console.log("hewwo")

var footer = document.querySelectorAll('#footer')
console.log(footer)

var h2 = document.querySelector('h2')
console.log(h2)

h2.innerText = 'Welcome to San Jose!!!'

var pho = document.querySelectorAll('.pho')
console.log(pho)

// we want to get an array because we're trying to locate all of the elements under the same class

const list = document.querySelectorAll('li')
list[3].style.color = 'orange'

// why "can't it read property of 'style'"

list[3].innerText = 'Jamboree sandwich at the Jambo-ree'

const newImg = document.createElement('img')
newImg.setAttribute('src', 'https://cdn.vox-cdn.com/thumbor/rciSylhFKjZ950eIEGGFdJhlS7I=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19366191/LeGarage_PChang_9297.jpg')

const tacos = document.querySelector('.tacos')
tacos.appendChild(newImg)








