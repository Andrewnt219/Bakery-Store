/* data */
/* !regex --> error */
/* Add new requirement here */
const verifiers = [
    {
        id: 'lowercase',
        desc: 'At least 1 lower case',
        regex: /[a-z]/,
        reverse: false
    },
    {
        id: 'uppercase',
        desc: 'At least 1 upper case',
        regex: /[A-Z]/,
        reverse: false
    },
    {
        id: 'digit',
        desc: 'At least 1 digit',
        regex: /\d/,
        reverse: false
    },
    {
        id: 'specialCharacter',
        desc: 'At least 1 special character',
        regex: /[!@#$%^&*()_+=\-,.<>?\/\[\]{};:'"]/,
        reverse: false
    },
    {
        id: 'length',
        desc: '8 to 25 non-whitespace characters.',
        regex: /\S{8,25}/,
        reverse: false
    },
    {
        id: 'whiteSpace',
        desc: 'No whitespaces',
        regex: /.*\s/,
        reverse: true
    },
]

/* elems */
/* forms */
const register = document.querySelector('#register');
const login = document.querySelector('#login');
const error = register.querySelector('.error');
/* nav bar */
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');


/* listeners */
registerButton.addEventListener('click', display);
loginButton.addEventListener('click', display);
register.addEventListener('submit', registerValidation);
// login.addEventListener('submit', loginValidation);
register.password.addEventListener('change', visualizedRequirement)
register.passwordAgain.addEventListener('change', visualizedRequirement)

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

/* Add '*' to all required inputs */
(function () {
    const requiredInput = register.querySelectorAll('input[required]')
    requiredInput.forEach(input => {
        const requiredLabel = register.querySelector(`label[for=${input.name.trim()}]`);
        requiredLabel.innerHTML += '<span class="required">*</span>'
    })
})();

/* Add password requirements */
(function () {
    // Create checklist into DOM
    const checkList = document.createElement('div');
    checkList.id = "passwordCheckList";
    verifiers.forEach(verifier => {
        const p = document.createElement('p');
        p.id = verifier.id;
        p.classList.add('checkList');
        if (verifier.reverse) p.classList.add('check');
        p.innerHTML = `<i class="fas fa-check"></i> ${verifier.desc}`;
        checkList.appendChild(p);
    })
    const position = register.querySelector('label[for="passwordAgain"]');
    register.insertBefore(checkList, position);
})();

/* Add navActive to current category */
(function() {
    const nav = document.querySelector('#productsNav');
    
    if(nav) {
        const anchors = nav.querySelectorAll('a');
        for(let a of anchors) {
            if (a.dataset.category === nav.dataset.category)
                a.classList.add('navActive');
        }
    }
})()

/* form validation */
function visualizedRequirement() {
    const password = register.password.value;
    console.log(password);
    for (veri of verifiers) {
        const p = register.querySelector(`#${veri.id}`);
        switch (veri.reverse) {
            /* Looks for invalid characters cases */
            case false:
                if (veri.regex.test(password)) {
                    p.classList.add('check');
                } else
                    p.classList.remove('check');
                break;
            /* Look for required characters cases */
            case true:
                if (veri.regex.test(password))
                    p.classList.remove('check');
                else
                    p.classList.add('check');
                break;
            default:
                console.error('veri.reverse is not a boolean!');
                break;
        }
    }

    const checkAgain = register.querySelector('#checkAgain');
    const passwordAgain = register.passwordAgain.value;

    if(password !== passwordAgain)
        checkAgain.style.opacity = '0.5';
    else
        checkAgain.style.opacity = '1';
}

// create error <p> in errorDiv
function addError(errs, formNode) {
    const errorDiv = formNode.querySelector('.error');
    if (errorDiv) {
        errorDiv.innerHTML = '';
        errs.forEach(err => {
            const error = document.createElement('p');
            error.innerHTML = `<i class="fas fa-times"></i> ${err}`;
            errorDiv.appendChild(error);
        })
        const submit = formNode.querySelector('input[type="submit"]');
        formNode.insertBefore(errorDiv, submit);
    } else 
        console.error('error div not found!');

}

function registerValidation(e) {
    // Requirements
    // This is still need to manually added
    const goodPassword = /(?=\S{8,16})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-,.<>?\/\[\]{};:'"])(?!.*\s)/

    const password = register.password.value;
    const passwordAgain = register.passwordAgain.value;

    if (goodPassword.test(password) && password === passwordAgain)
        return true;
    else {
        e.preventDefault();
        let errors = [];
        if (!goodPassword.test(password))
            errors.push('Password\'s requirement(s) are not fulfilled!')
        if (password !== passwordAgain)
            errors.push("Password does not match!");
        addError(errors,register);
    }
}
// function loginValidation(e) {
//     const username = login.username.value.trim();
//     const password = login.password.value.trim();
//     const _username = "iLike"
//     const _password = "1102"

    
//     const valid = username === _username && password === _password;

//     if (!valid) {
//         e.preventDefault();
//         addError(["Username or password is incorrect!"], login);
//     }
//     else
//         return true;
// }   