const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processMessage() {
    const message = userInput.value.trim().toLowerCase();
    
    if (message === "") {
        displayMessage("Error: Please type a message before sending.", 'bot');
        return;
    }

    displayMessage(userInput.value, 'user');
    userInput.value = '';

    if (message.includes('hello') || message.includes('hi')) {
        displayMessage("Hi! Welcome to Jollibee! How can I assist you with choosing a dish today?", 'bot');
    } else if (message.includes('chicken') || message.includes('fried chicken')) {
        displayMessage("You can't go wrong with the classic Chickenjoy! Crispy and juicy.", 'bot');
    } else if (message.includes('burger')) {
        displayMessage("Our famous Yumburger is perfect for a quick and delicious snack.", 'bot');
    } else if (message.includes('spaghetti') || message.includes('pasta')) {
        displayMessage("Try our Jolly Spaghetti! Sweet and savory with a cheesy twist.", 'bot');
    } else if (message.includes('rice') || message.includes('meal')) {
        displayMessage("You’ll love our Burger Steak with savory mushroom gravy, served with rice.", 'bot');
    } else if (message.includes('breakfast')) {
        displayMessage("Yes! Our Jollibee Breakfast Joys are available in many locations. Try the Longganisa with Garlic Rice and Egg.", 'bot');
    } else if (message.includes('dessert') || message.includes('sweet')) {
        displayMessage("For dessert, you have to try our Peach Mango Pie. Crispy, sweet, and fruity.", 'bot');
    } else if (message.includes('drink') || message.includes('beverage')) {
        displayMessage("Cool down with a Jolly Float! Ice-cold soda topped with creamy vanilla soft-serve.", 'bot');
    } else if (message.includes('thank you') || message.includes('goodbye')) {
        displayMessage("You're welcome! Enjoy your Jollibee meal!", 'bot');
    } else {
        displayMessage("Sorry, I didn't understand that. Please ask about Jollibee dishes.", 'bot');
    }
}

function sendQuickMessage(message) {
    userInput.value = message;
    processMessage();
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processMessage();
    }
});

function refreshChat() {
    chatBox.innerHTML = '';
    userInput.value = '';
}

function confirmRefresh() {
    refreshChat();
    $('#refreshModal').modal('hide');
}
