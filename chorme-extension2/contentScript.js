// runs on the matching webpage
// 
var button = document.createElement("button")
var buttonTextNode = document.createTextNode("Click me to trigger something, somewhere")
var body = document.querySelector("body")
button.appendChild(buttonTextNode);

body.append(button)

button.addEventListener("click", function ()
{

	chrome.runtime.sendMessage({
		type: 'info',
		value: 'Hello world fron Overseas :)'
	})
})

var prevTarget=null;
document.addEventListener('click', function(e) {
        //This will be the top-most DOM element under cursor
        var target=e.target;
        if(target!==prevTarget && target !== undefined){
            prevTarget=target;
            chrome.runtime.sendMessage({
				type: 'info',
				value: target
			})
        }
    });
