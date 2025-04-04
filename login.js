window.onload = function() {
    document.getElementById('userid').focus();
};

function validateUserid(userid) {
    const messageElement = document.getElementById('userid-message');
    messageElement.className = '';
    messageElement.textContent = '';

    if (!userid) {
        messageElement.textContent = "아이디를 입력해 주세요.";
        messageElement.className = 'error-message';
        return false;
    }

    const useridRegex = /^[a-z0-9]{4,}$/;
    if (!useridRegex.test(userid)) {
        messageElement.textContent = "아이디는 소문자/숫자로 4자 이상 사용 가능합니다.";
        messageElement.className = 'error-message';
        return false;
    }

    messageElement.textContent = "올바른 형식입니다.";
    messageElement.className = 'valid-message';
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('password-message');
    messageElement.className = '';
    messageElement.textContent = '';

    if (!password) {
        messageElement.textContent = "비밀번호를 입력해 주세요.";
        messageElement.className = 'error-message';
        return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;
    if (!passwordRegex.test(password)) {
        messageElement.textContent = "비밀번호는 8~20자의 영문 대/소문자, 숫자, 특수문자 등 3종류 이상으로 조합해주세요.";
        messageElement.className = 'error-message';
        return false;
    }

    messageElement.textContent = "사용 가능한 비밀번호입니다.";
    messageElement.className = 'valid-message';
    return true;
}


function validateName(name) {
    const messageElement = document.getElementById('name-message');
    messageElement.className = '';
    messageElement.textContent = '';

    if (!name) {
        messageElement.textContent = "이름을 입력해 주세요.";
        messageElement.className = 'error-message';
        return false;
    }

    const nameRegex = /^[a-zA-Z가-힣]{1,30}$/;
    if (!nameRegex.test(name)) {
        messageElement.textContent = "이름은 한글, 영문 대소문자만 사용해 주세요.";
        messageElement.className = 'error-message';
        return false;
    }

    messageElement.textContent = "사용 가능한 이름입니다.";
    messageElement.className = 'valid-message';
    return true;
}

function validateEmail(email) {
    const messageElement = document.getElementById('email-message');
    messageElement.className = '';
    messageElement.textContent = '';

    if (!email) {
        messageElement.textContent = "이메일을 입력해 주세요."; 
        messageElement.className = 'error-message';
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        messageElement.textContent = "올바른 이메일 형식을 입력해 주세요."; 
        messageElement.className = 'error-message';
        return false;
    }

    messageElement.textContent = "올바른 이메일 형식입니다."; 
    messageElement.className = 'valid-message';
    return true;
}

document.getElementById('userid').addEventListener('input', function() {
    validateUserid(this.value.trim());
});

document.getElementById('password').addEventListener('input', function() {
    validatePassword();
});

document.getElementById('name').addEventListener('input', function() {
    validateName(this.value.trim());
});

document.getElementById('email').addEventListener('input', function() {
    validateEmail(this.value.trim());
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('userid').value.trim();
    const password = document.getElementById('password').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    const isUseridValid = validateUserid(userId);
    const isPasswordValid = validatePassword();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (!isUseridValid || !isPasswordValid || !isNameValid || !isEmailValid) {
        return;
    }

    if (confirm("가입을 완료하시겠습니까?")) {
        alert("가입이 완료되었습니다!");
        // this.submit();
    }
});
