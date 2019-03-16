// JavaScript Document

(function () {

	console.log("SEAF Fired");

	var teamArray = [
		{
			image: 'images/logan_pic.png',
			name: 'Logan',
			bio: 'Hi there, My name is Logan Bissell and I am currently enrolled in Interactive Media Design at Fanshawe College. I am 18 turning 19 in october and I am the younger brother in my family. My passion falls into video editing and I am hoping to move towards being a part of the movie industry post graduation. In my spare time I like to play video games, explore new movies and tv shows, and play some of my instruments (acoustic guitar and electric keyboard). My main goal with whatever full time position I end up in, is to be able to bring the same happiness to people that movies have brought to me in my life.'
		},
		{
			image: 'images/keiran_hollenbeck.jpg',
			name: 'Keiran',
			bio: 'My name is Keiran Hollenbeck, I am 19 and I’m currently enrolling Fanshawe college for Interactive Media Design. I do Photography and hiking as a hobby, sometimes I do both at once to do some traveling photos. On my spare time, I like to play videogames, hangout with my brothers if they are free, and watch a lot of movies. I am also the youngest sibling out of 8. I’ve been interested in taking Front End Developing and hope to make a full time career out of it.'
		},

	];

	teamArray.forEach(function(person, idx) {
		var li = document.createElement('li');
		if(idx == 0)
		{
			li.className = "visible";
		}
		var text     = document.createTextNode(`${person.name}`);
		var bio      = document.createTextNode(`${person.bio}`);
		var center   = document.createElement('center');
		var image    = document.createElement('img');
		var h3       = document.createElement('h2');
		var br1      = document.createElement('br');
		var br2      = document.createElement('br');
		image.src    = person.image;
		image.alt    = person.name + ' image';
		h3    .appendChild(text);
		center.appendChild(image);
		center.appendChild(br1);
		center.appendChild(br2);
		center.appendChild(h3);
		li    .appendChild(center);
		li    .appendChild(bio);
		document.getElementsByClassName('slider')[0].appendChild(li);;
	});

	var prev = document.querySelector('div.prev');
	var next = document.querySelector('div.next');
	var index = 0;
	var lis = document.querySelectorAll('ul.slider li');
	var count = lis.length;

	prev.addEventListener('click', function () {
		lis[index].classList.remove('visible');
		index--;
		if (index < 0) {
			index = count - 1;
		}

		lis[index].classList.add('visible');
	});

	next.addEventListener('click', function () {
		lis[index].classList.remove('visible');
		index++;
		if (index > count - 1) {
			index = 0;
		}

		lis[index].classList.add('visible');
	});


})();