var xhr = new XMLHttpRequest();

function signUpSubmit(firstName, lastName, email, mobile, password) {
    var params = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        phone: mobile.value,
        password: password.value
    }
    xhr.open('POST', 'http://127.0.0.1:5500/index.html');

    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange();
}

function login(email, password) {
    var param = window.btoa(email.value + ":" + password.value);
    xhr.open('POST', 'http://localhost:8080/api/v1/auth/login');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('Authorization', 'Basic' + param);
    xhr.send();
    xhr.onreadystatechange = sendRequest;
}

function sendRequest() {
    console.log(xhr.response);
    if (xhr.readyState === 4) {
        sessionStorage.setItem('user-detail', xhr.responseText);
        sessionStorage.setItem('access-token', xhr.getResponseHeader('access-token'));
    }
}