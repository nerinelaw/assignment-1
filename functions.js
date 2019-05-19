var message;
var messageList = [];


function purifyWord(phrase){
    var checkBox = document.getElementById("pg13");
    if(checkBox.checked == true){
        if (phrase.includes('fuck')){
            phrase = phrase.replace("fuck","f***");
        }
    }
    return phrase;
}

function addMessage(){  
    message = document.getElementById("text-input").value;
    if (message != ""){
        message = purifyWord(message);
        messageList.push(message);
        document.getElementById("see-message").value = messageList.join("\n\n");
    }
}

function clearInputText(){

}

function openWelcome(){
    window.location.href="homePage.htm";
}

function openChatPage(){
    window.location.href="chatPage.htm";
}

