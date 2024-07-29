
const sunnySelectorBtn = document.querySelector('#sunny-selector');
const simpiSelectorBtn = document.querySelector('#simpi-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessage = document.querySelector('.chat-message');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');


let currentUser = 'sunny';

// Function to create chat message element
const chatMessageElement = (message) => `
    <div class="message ${message.sender === 'sunny' ? 'blue-bg' : 'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`;

// Switch user function
const switchUser = (user) => {
    currentUser = user;
    chatHeader.textContent = `${user} chatting...`;
    chatInput.placeholder = `Type here, ${user}...`;
    sunnySelectorBtn.classList.toggle('active-person', user === 'sunny');
    simpiSelectorBtn.classList.toggle('active-person', user === 'simpi');
};

// Event listeners for user buttons
sunnySelectorBtn.addEventListener('click', () => switchUser('sunny'));
simpiSelectorBtn.addEventListener('click', () => switchUser('simpi'));

// Event listener for chat input form submission
chatInputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const message = {
            sender: currentUser,
            text: messageText,
            timestamp: timestamp
        };
        chatMessage.innerHTML += chatMessageElement(message);
        chatInput.value = '';
        chatMessage.scrollTop = chatMessage.scrollHeight;
    }
});

// Event listener for clear chat button
clearChatBtn.addEventListener('click', () => {
    chatMessage.innerHTML = '';
});
