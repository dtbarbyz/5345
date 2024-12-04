// Переменные для хранения данных
let users = {}; // Это будет простой объект для хранения пользователей и их паролей
let loggedInUser = null;

// Показываем форму регистрации
document.querySelector('.register-btn').addEventListener('click', function() {
    document.querySelector('.auth-form').style.display = 'none';
    document.querySelector('.registration-form').style.display = 'block';
});

// Показываем форму входа
document.querySelector('.login-btn').addEventListener('click', function() {
    document.querySelector('.auth-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
});

// Регистрация пользователя
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (users[username]) {
        alert("Username already taken!");
        return;
    }

    users[username] = password;
    alert("Registration successful!");
    
    // Переход к экрану входа
    document.querySelector('.registration-form').style.display = 'none';
    document.querySelector('.auth-form').style.display = 'none';
    document.querySelector('.app-container').style.display = 'flex';
    loggedInUser = username;
});

// Вход в систему
