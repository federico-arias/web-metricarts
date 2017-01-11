import './styles/main.scss';
import './index.html';
import './fonts/RaspoutineClassic.scss';
import './cards.js';

/*var fc = require('./demo.js');
fc.foobar();*/

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function hideSvgPath(path) {
	var length = path.getTotalLength();
	path.style.transition = path.style.WebkitTransition = 'none';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	path.getBoundingClientRect();
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
}

function extractPaths(svg) {
	const doc = svg.getSVGDocument();
    return doc.querySelectorAll("path"); 
}


const elems = document.querySelectorAll('object');
Array.prototype.forEach.call(elems, (svg) => {	
	svg.addEventListener('load', () =>  {
		Array.prototype.forEach.call(extractPaths(svg), (path) => hideSvgPath(path))
	})
});

window.onscroll = () => {
	Array.prototype.forEach.call(elems, (svg) => {	
		if (isScrolledIntoView(svg) && !svg.wasAnimated) {
			Array.prototype.forEach.call(extractPaths(svg), p => p.style.strokeDashoffset = '0');
			svg.wasAnimated = true;
		}
	});
};

['inicio', 'hacemos', 'quienes', 'blog', 'contacto'].forEach( x => {
	if (!(document.querySelector == undefined)) {
		document.getElementById(x + '-mnu').addEventListener('click', e => {
			e.preventDefault();
			document.getElementById(x).scrollIntoView({behavior: 'smooth'});
		});
	}
});
