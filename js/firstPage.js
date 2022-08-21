var hue = 180
var variance = 40
var saturation = 50
var lightness = 50
var opacity = 80
// var textcolour = 'white'
var currentbg = 'bubbles'

function showSettings() {
	document.querySelector('.show-settings-elements').style.opacity = '0'
	setTimeout(function () {
		var settings = document.querySelector('.settings')
		settings.style.zIndex = '2'
		document.querySelector('#show-settings').style.boxShadow = 'none'
		settings.style.boxShadow = '-0.2em 0.2em 0.7em -0.4em hsl(0, 0%, 0%)'
		settings.style.height = '18em'
		settings.style.width = '48em'
		document.querySelector('.settings-head span').style.color = '#fff'
	}, 125)
}

function hideSettings() {
	var settings = document.querySelector('.settings')
	document.querySelector('.settings-head span').style.color = 'hsl(220, 16%, 18%)'
	settings.style.height = '2em'
	settings.style.width = '6.9em'
	setTimeout(function () {
		settings.style.zIndex = '0'
		document.querySelector('.show-settings-elements').style.opacity = '1'
		document.querySelector('#show-settings').style.boxShadow = '-0.2em 0.2em 0.7em -0.4em hsl(0, 0%, 0%)'
		settings.style.boxShadow = 'none'
	}, 500)
}


// function changeColours() {
// 	document.querySelector('#sec1').style.background = 'hsl(' + (hue) + ',' + saturation + '%, ' + lightness + '%, ' + opacity + '%)'
// 	document.querySelector('#sec2').style.background = 'hsl(' + (hue + variance) + ',' + saturation + '%, ' + lightness + '%, ' + opacity + '%)'
// 	document.querySelector('#sec3').style.background = 'hsl(' + (hue + variance * 2) + ',' + saturation + '%, ' + lightness + '%, ' + opacity + '%)'
// }


let svg_img = document.querySelectorAll('.svg-img')

svg_img[0].addEventListener('click', function () {

	if (svg_img[0].classList.contains('selected')) {
		svg_img[0].classList.remove('selected');
	} else {
		svg_img[0].classList.add('selected');
		svg_img[1].classList.remove('selected');
		svg_img[2].classList.remove('selected');
	}
})
svg_img[1].addEventListener('click', function () {

	if (svg_img[1].classList.contains('selected')) {
		svg_img[1].classList.remove('selected');
	} else {
		svg_img[1].classList.add('selected');
		svg_img[0].classList.remove('selected');
		svg_img[2].classList.remove('selected');
	}
})
svg_img[2].addEventListener('click', function () {

	if (svg_img[2].classList.contains('selected')) {
		svg_img[2].classList.remove('selected');
	} else {
		svg_img[2].classList.add('selected');
		svg_img[0].classList.remove('selected');
		svg_img[1].classList.remove('selected');
	}
})

document.addEventListener("mousemove", parallax);

function parallax(e) {
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX * speed) / 100
		const y = (window.innerHeight - e.pageY * speed) / 100

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}
