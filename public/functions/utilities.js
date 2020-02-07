/* elems */
    /* forms */
const register = document.querySelector('#register');
const login = document.querySelector('#login');
    /* nav bar */
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');

/* listeners */
registerButton.addEventListener('click',display);
loginButton.addEventListener('click',display);
register.addEventListener('submit', registerValidation);
login.addEventListener('submit', loginValidation);

/* functions */
    /* - show/hide section.:is(register/login)
        - add active class */
function display(e) {

    const name = String(e.target.textContent).toLowerCase().trim();
    const hidden = document.querySelector(`section.${name}`);
    if (hidden) {
        hidden.classList.toggle('hidden');
    }
    this.classList.toggle('active');
}

    /* Change rating font color (threshold 4.0) */
(function rating() {
    const p = document.querySelector('p.rating');
    if (p) {
        if (Number(p.textContent) > 4.0)
            p.classList.add('good');
        else
            p.classList.add('bad');
    }
})();

    /* form validation */
function registerValidation(e) {
    
    const username = register.username.value.trim();
    const password = register.password.value.trim();
    const passwordAgain = register.passwordAgain.value.trim();
    const phone = register.phone.value.trim() || '';
    const email = register.email.value.trim();

    const goodPassword = /(?=\S{8,16})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-,.<>?\/\[\]{};:'"])/
    const verifiers = [
        {
            name: 'At least 1 lower case!',
            regex: /[a-z]/
        },
        {
            name: 'At least 1 upper case!',
            regex: /[A-Z]/
        },
        {
            name: 'At least 1 digit!',
            regex: /\d/
        },
        {
            name: 'At least 1 special character!',
            regex: /[!@#$%^&*()_+=\-,.<>?\/\[\]{};:'"]/
        },
        {
            name: 'Password must be 8-25 non-whitespace characters! white spaces are ok, but not 8 whitespaces or something',
            regex: /[\S{8,25}]/
        },
    ]
    
    if (!goodPassword.test(password)) {
        e.preventDefault();
        const errors = [];
        for (veri of verifiers) {
            if(!veri.regex.test(password))
                errors.push(veri.name);
        }
        console.log(errors);
    }
    else 
        return true;
}

function loginValidation(e) {
    const username = login.username.value.trim();
    const password = login.password.value.trim();
    const _username = "iLike"
    const _password = "1102"

    const valid = username === _username && password === _password;
    console.log(valid);

    if(!valid)
        e.preventDefault();
    else
        return true; 
}   