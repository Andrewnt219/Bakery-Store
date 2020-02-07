/* elems */
    /* forms */
/* const register = document.querySelector('#register');
const login = document.querySelector('#login'); */
    /* nav bar */
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');

/* listeners */
registerButton.addEventListener('click',display);
loginButton.addEventListener('click',display);

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
/* function validation(e) {
    e.preventDefault();
    console.log(register.username);
    console.log(register.password.value);
    return true;

} */