const globalHeight = window.innerHeight;

//-------------------------------------
//	DISPLAY BUBBLE
//-------------------------------------
const displayBubble = (groupBubble, nbBubble) => {
	for (let n = 0; n < 2; n++) {
		document
			.querySelectorAll('.bubble--group:nth-child(' + groupBubble + ') .bubble')
			[n].classList.add('enable');

		scrolling();
	}

	if (nbBubble == 3) {
		for (let n = 0; n < nbBubble; n++) {
			document
				.querySelectorAll(
					'.bubble--group:nth-child(' + groupBubble + ') .bubble--group__choice .bubble'
				)
				[n].classList.add('enable__choice');

			scrolling();
		}
	}
};

const androidScrollingFix = () => {
	scrolling();
};

//-------------------------------------
//	SMOOTH SCROLL DEPENDING DEVICE
//-------------------------------------
function scrolling() {
	let contatcForm = document.querySelector('.contact__form form');
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	//Android
	if (/android/i.test(userAgent)) {
		setTimeout(() => {
			contatcForm.scrollTo({
				top: contatcForm.scrollHeight,
				left: 0,
				behavior: 'smooth'
			});
		}, 200);
	}

	//iOS
	else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		setTimeout(() => {
			smooth_scroll_to(contatcForm, contatcForm.scrollHeight, 1000);
		}, 200);
	}

	//Others
	else {
		setTimeout(() => {
			smooth_scroll_to(contatcForm, contatcForm.scrollHeight, 1000);
		}, 200);
	}
}

//-------------------------------------
//	SMOOTH SCROLL
//-------------------------------------
var smooth_scroll_to = function(element, target, duration) {
	target = Math.round(target);
	duration = Math.round(duration);

	var start_time = Date.now();
	var end_time = start_time + duration;

	var start_top = element.scrollTop;
	var distance = target - start_top;

	var smooth_step = function(start, end, point) {
		if (point <= start) {
			return 0;
		}
		if (point >= end) {
			return 1;
		}
		var x = (point - start) / (end - start);
		return x * x * (3 - 2 * x);
	};

	return new Promise(function(resolve, reject) {
		var previous_top = element.scrollTop;

		var scroll_frame = function() {
			if (element.scrollTop != previous_top) {
				return;
			}

			var now = Date.now();
			var point = smooth_step(start_time, end_time, now);
			var frameTop = Math.round(start_top + distance * point);
			element.scrollTop = frameTop;

			if (now >= end_time) {
				resolve();
				return;
			}

			if (element.scrollTop === previous_top && element.scrollTop !== frameTop) {
				resolve();
				return;
			}
			previous_top = element.scrollTop;

			setTimeout(scroll_frame, 0);
		};

		setTimeout(scroll_frame, 0);
	});
};

//-------------------------------------
//	GET ANSWER
//-------------------------------------
const getAnswer = (name, groupBubble, nbBubble) => {
	let answerID = document.getElementById(name + 'Answer');
	let answer = answerID.value;

	if (answer !== '' && answer !== ' ') {
		answerID.setAttribute('readonly', true);

		if (name == 'name') {
			document.getElementById(name + 'Question').innerHTML = answer;
		}

		document.querySelector('#' + name + 'Answer + p').innerText = '';
		document.querySelector('.btn-enter--' + groupBubble).style.display = 'none';
		displayBubble(groupBubble, nbBubble);
	} else {
		switch (name) {
			case 'name':
				document.querySelector('#' + name + 'Answer + p').innerText =
					"Oups, tu as oublié d'écrire ton nom";
				break;
			case 'message':
				document.querySelector('#' + name + 'Answer + p').innerText =
					"Attention, tu n'as pas écris de message";
				break;
		}
		scrolling();
	}
};

//-------------------------------------
//	AUTO-REZISE © Zenchef
//-------------------------------------
const textareaChat = document.querySelector('#messageAnswer');
textareaChat.addEventListener('input', autoSize, false);
const TEXTAREA_CONFIG = {
	LINE_HEIGHT: 18,
	PADDING: 0
};
function autoSize() {
	if (textareaChat) {
		textareaChat.setAttribute('rows', 2);
		const rowsRequired = parseInt(
			(textareaChat.scrollHeight - TEXTAREA_CONFIG.PADDING) / TEXTAREA_CONFIG.LINE_HEIGHT
		);
		if (rowsRequired !== parseInt(textareaChat.getAttribute('rows'))) {
			textareaChat.setAttribute('rows', rowsRequired);
		}
	}
}

//-------------------------------------
//    VALIDATE EMAIL
//-------------------------------------
const validateEmail = email => {
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

const validate = (groupBubble, nbBubble) => {
	let result = document.querySelector('#result');
	let email = document.querySelector('#mailAnswer').value;

	if (validateEmail(email)) {
		document.querySelector('#mailAnswer').setAttribute('readonly', true);
		result.style.display = 'none';
		displayBubble(groupBubble, nbBubble);
		sendEmail();
	} else {
		result.innerHTML = "<p class='chat-msg-error'>L'adresse mail n'est pas valide</p>";
		scrolling();
	}
	return false;
};

//-------------------------------------
//    MAIL SENDING
//-------------------------------------
const sendEmail = () => {
	//Variables
	let nameAnswer = document.getElementById('nameAnswer').value;
	let mailAnswer = document.getElementById('mailAnswer').value;
	if (document.getElementById('project-1').checked) {
		var objectAnswer = 'Une question ?';
	} else if (document.getElementById('project-2').checked) {
		var objectAnswer = 'Un projet dans les cartons';
	} else if (document.getElementById('project-3').checked) {
		var objectAnswer = 'Seulement envie de dire bonjour';
	}
	let messageAnswer = document.getElementById('messageAnswer').value;

	xhr = new XMLHttpRequest();
	xhr.open('POST', 'sendEmail.php');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(
		JSON.stringify({
			name: nameAnswer,
			mail: mailAnswer,
			object: objectAnswer,
			message: messageAnswer
		})
	);
};
