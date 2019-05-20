var message;
var messageList = [];
var name;
var myJSON = '{"welcome-message":"Welcome", "random":"Leave a message!"}';
var myObj;

function loadText(){
    name = document.getElementById("name-input");
    myObj = JSON.parse(myJSON);
    messageList.push(myObj.welcome-message + name + "!");
    openChatPage();
}

function loadMessages(){
    myMsg = JSON.parse(myJSON);
    messageList.push(myMsg.random);
    document.getElementById("see-message").value = messageList.join("\n\n");
}

function enterChat(){
    openChatPage();
}

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
    document.getElementById("text-input").value = "";
}

function clearMessages(){
    messageList = [];
    document.getElementById("see-message").value = messageList;
}

function openWelcome(){
    window.location.href="homePage.htm";
}

function openChatPage(){
    window.location.href="chatPage.htm";
}

