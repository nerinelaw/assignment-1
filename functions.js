var message;
var messageList = [];
var name;
var myJSON = '{"welcome":"Welcome!", "random":"Leave a message!"}';
var myObj;

// Loads welcome message 
// Parses through JSON string and gets string from object
// Adds string to messageList to display

function loadMessages(){
    myMsg = JSON.parse(myJSON);
    messageList.push(myMsg.welcome);
    messageList.push(myMsg.random);
    document.getElementById("see-message").value = messageList.join("\n\n");
}

// Checks input text for swear word
// replaces swear word with starred out word

function purifyWord(phrase){
    var checkBox = document.getElementById("pg13");
    if(checkBox.checked == true){
        if (phrase.includes('fuck')){
            phrase = phrase.replace("fuck","f***");
        }
    }
    return phrase;
}


// Get message from textarea and add to list
// Update list to display new list

function addMessage(){  
    message = document.getElementById("text-input").value;
    if (message != ""){
        message = purifyWord(message);
        messageList.push(message);
        document.getElementById("see-message").value = messageList.join("\n\n");
    }
}

// Clears text from input textarea

function clearInputText(){
    document.getElementById("text-input").value = "";
}

// Clears all messages in message textarea

function clearMessages(){
    messageList = [];
    document.getElementById("see-message").value = messageList;
}

// Redirects to welcome page

function openWelcome(){
    window.location.href="homePage.htm";
}

// Redirects to message page

function openChatPage(){
    window.location.href="chatPage.htm";
}

