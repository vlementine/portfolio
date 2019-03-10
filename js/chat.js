const globalHeight = window.innerHeight;

//-------------------------------------
//	DISPLAY BUBBLE
//-------------------------------------
const displayBubble = (groupBubble, nbBubble) => {
	let contatcForm = document.querySelector('.contact__form form');

	for (let n = 0; n < 2; n++) {
		document
			.querySelectorAll('.bubble--group:nth-child(' + groupBubble + ') .bubble')
			[n].classList.add('enable');

		setTimeout(() => {
			smooth_scroll_to(contatcForm,contatcForm.scrollHeight,800);
			// contatcForm.scrollTo({
			// 	top: contatcForm.scrollHeight,
			// 	left: 0,
			// 	behavior: 'smooth'
			// });
		}, 200);
	}

	if (nbBubble == 3) {
		for (let n = 0; n < nbBubble; n++) {
			document
				.querySelectorAll(
					'.bubble--group:nth-child(' + groupBubble + ') .bubble--group__choice .bubble'
				)
				[n].classList.add('enable__choice');

			setTimeout(() => {
				smooth_scroll_to(contatcForm,contatcForm.scrollHeight,800);
				// contatcForm.scrollTo({
				// 	top: contatcForm.scrollHeight,
				// 	left: 0,
				// 	behavior: 'smooth'
				// });
			}, 200);
		}
	}
};

const androidScrollingFix = () => {
	let contatcForm = document.querySelector('.contact__form form');

	setTimeout(() => {
		if (window.innerHeight < globalHeight) {
			// contatcForm.scrollTo({
			// 	top: contatcForm.scrollHeight,
			// 	left: 0,
			// 	behavior: 'smooth'
			// });
			smooth_scroll_to(contatcForm,contatcForm.scrollHeight,800);
		}
	}, 100);
};

var smooth_scroll_to = function(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;

    var start_top = element.scrollTop;
    var distance = target - start_top;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previous_top = element.scrollTop;

        // This is like a think function from a game loop
        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if(now >= end_time) {
                resolve();
                return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
}

//-------------------------------------
//	GET ANSWER
//-------------------------------------
const getAnswer = (name, groupBubble, nbBubble) => {
	let answer = document.getElementById(name + 'Answer').value;

	document.querySelector('.btn-enter--' + groupBubble).style.display = 'none';

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
		result.innerHTML = "<p class='chat-msg-error'>L'adresse mail n'est pas valide</p>";
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
