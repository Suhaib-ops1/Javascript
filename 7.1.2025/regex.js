function validation(event) {
    event.preventDefault()
}

let fn = document.getElementById('fname')
let ln = document.getElementById('lname')
let bd = document.getElementById('BD')
let email = document.getElementById('email')
let conEm = document.getElementById('conEmail')
let pws = document.getElementById('pws')
let conP = document.getElementById('conPws')

fn.addEventListener('input', function () {
    validateName(fn , 'first'); // Pass the email input element
});

ln.addEventListener('input', function () {
    validateName(ln , 'last'); // Pass the email input element
});

bd.addEventListener('input', function () {
    validateDate(bd); // Pass the email input element
});

email.addEventListener('input', function () {
    ValidateEmail(email); // Pass the email input element
});

conEm.addEventListener('input',function(){
    conEmail(conEm,email)
})

pws.addEventListener('input',function(){
    ValidatePws(pws);
})

conP.addEventListener('input',function(){
    conPws(conP,pws)
})

function validateName(input, parentId) {
    const validRegex = /^[a-zA-Z']{3,20}$/;
    const errorId = parentId + 'NameError'; // Unique error ID for each field

    // Clear any previous error message
    const existingError = document.getElementById(errorId);
    if (existingError) {
        existingError.remove();
    }

    let errorMessage = '';

    if (input.value.length < 3 || input.value.length > 20) {
        errorMessage = 'The minimum entry length is 3 letters, and the maximum is 20.';
    } else if (!validRegex.test(input.value)) {
        errorMessage = 'Name can only contain letters and a single quote.';
    }

    if (errorMessage) {
        let comment = document.createElement('p');
        comment.id = errorId; // Unique error message ID
        comment.className = 'error';
        comment.innerHTML = errorMessage;
        document.getElementById(parentId).appendChild(comment); // Append to the correct parent
    }
}

function validateDate(input) {
    var validRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

    // Clear any previous error message
    const errorContainer = document.getElementById('dateError');
    if (errorContainer) {
        errorContainer.remove();
    }

    if (!input.value.match(validRegex)) {
        let comment = document.createElement('p');
        comment.id = 'dateError'; // Unique ID for the error message
        comment.className = 'error'; // Apply error styling
        comment.innerHTML = 'The format should be dd/mm/yyyy';
        document.getElementById('d').appendChild(comment);
    }
}

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Clear any previous error message
    const errorContainer = document.getElementById('emailError');
    if (errorContainer) {
        errorContainer.remove();
    }

    if (!input.value.match(validRegex)) {
        let comment = document.createElement('p');
        comment.id = 'emailError'; // ID to ensure only one error message
        comment.className = 'error'; // css class
        comment.innerHTML = 'The email is not valid';
        document.getElementById('e').appendChild(comment);
        return false
    }
    else return true
}

function conEmail(input, em) {
    const errorContainer = document.getElementById('conEmailError');
    
    // If the confirm email matches the original email, remove the error message (if it exists)
    if (input.value === em.value) {
        if (errorContainer) {
            errorContainer.remove();
        }
    } else {
        // If they don't match, show the error message
        if (!errorContainer) {
            let comment = document.createElement('p');
            comment.id = 'conEmailError'; // Unique ID for confirm email error message
            comment.className = 'error'; // CSS class for styling
            comment.innerHTML = 'The email does not match';
            document.getElementById('ce').appendChild(comment);
        }
    }
}


function ValidatePws(input) {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Clear any previous error message
    const errorContainer = document.getElementById('pwsError');
    if (errorContainer) {
        errorContainer.remove();
    }
    let l =lowerCases(input.value)
    let u = UpperCases(input.value)
    let n =number(input.value)
    let le = length(input.value)

    if (!input.value.match(validRegex)) {
        let comment = document.createElement('p');
        comment.id = 'pwsError'; // ID to ensure only one error message
        comment.className = 'error'; // css class
        
        comment.innerHTML = l+" "+u+" "+n+" "+le;
        document.getElementById('p').appendChild(comment);
        return false
    }
    else return true
}

function lowerCases(password) {
    var lowerCaseLetters = /[a-z]/g;
    return password.match(lowerCaseLetters) ? '' : 'must have lowercase';
}

function UpperCases(password) {
    var upperCaseLetters = /[A-Z]/g;
    return password.match(upperCaseLetters) ? '' : 'must have uppercase';
}

function number(password) {
    var numbers = /[0-9]/g;
    return password.match(numbers) ? '' : 'must have number';
}

function length(password) {
    return password.length >= 8 ? '' : '8 or more chars';
}

function conPws(input, pw) {
    const errorContainer = document.getElementById('conPwsError');
    
    
    if (input.value === pw.value) {
        if (errorContainer) {
            errorContainer.remove();
        }
    } else {
        
        if (!errorContainer) {
            let comment = document.createElement('p');
            comment.id = 'conPwsError'; // Unique ID for confirm email error message
            comment.className = 'error'; // CSS class for styling
            comment.innerHTML = 'The password does not match';
            document.getElementById('cp').appendChild(comment);
        }
    }
}