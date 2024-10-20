// Modal functionality for login
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeLoginModal = document.getElementById('closeLoginModal');

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

closeLoginModal.onclick = function() {
    loginModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
}

// Modal functionality for register
const registerModal = document.getElementById('registerModal');
const registerBtn = document.getElementById('registerBtn');
const closeRegisterModal = document.getElementById('closeRegisterModal');

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

closeRegisterModal.onclick = function() {
    registerModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
}

// Chat functionality
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');
const sendMessageBtn = document.getElementById('sendMessageBtn');

sendMessageBtn.onclick = function() {
    const message = messageInput.value;
    if (message.trim()) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = ''; // Clear input field
    }
}
