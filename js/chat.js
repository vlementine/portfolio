//-------------------------------------
//	DISPLAY BUBBLE
//-------------------------------------
const displayBubble = (groupBubble, nbBubble) => {
	let contatcForm = document.querySelector('.contact__form form');

	for (let n = 0; n < 2; n++) {
		document
			.querySelectorAll('.bubble--group:nth-child(' + groupBubble + ') .bubble')
			[n].classList.add('enable');

		contatcForm.scrollTo(0, contatcForm.scrollHeight);
	}

	if (nbBubble == 3) {
		for (let n = 0; n < nbBubble; n++) {
			document
				.querySelectorAll(
					'.bubble--group:nth-child(' + groupBubble + ') .bubble--group__choice .bubble'
				)
				[n].classList.add('enable__choice');

			contatcForm.scrollTo(0, contatcForm.scrollHeight);
		}
	}
};

//-------------------------------------
//	GET ANSWER
//-------------------------------------
const getAnswer = (name, groupBubble, nbBubble) => {
	let answer = document.getElementById(name + 'Answer').value;
	displayBubble(groupBubble, nbBubble);

	if (answer !== '' && answer !== ' ') {
		document.getElementById(name + 'Answer').setAttribute('readonly', true);

		if (name == 'name') {
			document.getElementById(name + 'Question').innerHTML = answer;
		}
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
		result.innerText = "L'adresse n'est pas valide";
		result.style.color = 'crimson';
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
