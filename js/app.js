const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carouselDOMElement = document.querySelector('.carousel')

for(let i = 0; i < images.length; i++){

    carouselDOMElement.innerHTML += 
    `
	<div class="carousel__item d-none">
    	<div>
    	    <img src="${images[i].image}"></img>
    	</div>
    	<div>
    	    <p>${images[i].title}</p>
    	</div>
    	<div>
    	    <p>${images[i].text}</p>
    	</div>
	</div>
    `
}

let currentIndex = 0
let currentIndexPreview = 0
const previewDOMElement = document.querySelectorAll('.preview__item')
const skipUpDOMElements = document.querySelector('.skip-up')
const skipDownDOMElements = document.querySelector('.skip-down')
const currentlItemDOMElements = document.querySelectorAll('.carousel__item')

currentlItemDOMElements[currentIndex].classList.remove('d-none')
previewDOMElement[currentIndexPreview].classList.remove('opacity')
previewDOMElement[currentIndexPreview].classList.add('bs')

skipUpDOMElements.addEventListener('click' , function (){
	previewDOMElement[currentIndexPreview].classList.remove('bs')
	previewDOMElement[currentIndexPreview].classList.add('opacity')
	currentlItemDOMElements[currentIndex].classList.add('d-none')

	if(currentIndex >= images.length - 1){
		currentIndex = 0
		currentIndexPreview = 0
	}else{
		currentIndex += 1
		currentIndexPreview += 1
	}
	currentlItemDOMElements[currentIndex].classList.remove('d-none')	
	previewDOMElement[currentIndexPreview].classList.remove('opacity')
	previewDOMElement[currentIndexPreview].classList.add('bs')
})

skipDownDOMElements.addEventListener('click' , function (){
	previewDOMElement[currentIndexPreview].classList.add('bs')
	previewDOMElement[currentIndexPreview].classList.add('opacity')
	currentlItemDOMElements[currentIndex].classList.add('d-none')

	if (currentIndex <= 0) {
        currentIndexPreview = (images.length - 1);
        currentIndex = (images.length - 1);
    }else{
        currentIndex -= 1;
		currentIndexPreview -= 1;
    }
	currentlItemDOMElements[currentIndex].classList.remove('d-none')
	previewDOMElement[currentIndexPreview].classList.remove('opacity')
	previewDOMElement[currentIndexPreview].classList.remove('bs')
})


const idInterval = setInterval(() => {
	console.log('è passato un secondo')
	previewDOMElement[currentIndexPreview].classList.remove('bs')
	previewDOMElement[currentIndexPreview].classList.add('opacity')
	currentlItemDOMElements[currentIndex].classList.add('d-none')

	if(currentIndex >= images.length - 1){
		currentIndex = 0
		currentIndexPreview = 0
	}else{
		currentIndex += 1
		currentIndexPreview += 1
	}
	currentlItemDOMElements[currentIndex].classList.remove('d-none')	
	previewDOMElement[currentIndexPreview].classList.remove('opacity')
	previewDOMElement[currentIndexPreview].classList.add('bs')
}, 3000)