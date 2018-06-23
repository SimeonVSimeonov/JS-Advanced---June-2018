function validate() {
    let username = $('#username');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let email = $('#email');
    let company = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');
    let allFieldsAreValid = true;

    company.on('change', function () {
        if (company.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    })

    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateForm();
        if (allFieldsAreValid) {
            validDiv.css('display', 'block');
        } else {
            validDiv.css('display', 'none');
        }
    });

    function validateForm() {
        validateFieldWithRegex(username, /^[A-Za-z0-9]{3,20}$/g);
        validateFieldWithRegex(email, /^.*@.*\..*$/g);
        if (password.text() === confirmPass.text()) {
            validateFieldWithRegex(password, /^\w{5,15}$/g);
            if (password.css('border') === '1px solid red') {
                confirmPass.css('border', '1px solid red');
            }
        }
        if (companyInfo.css('display') === 'block') {
            validateFieldWithRegex(companyNumber, /^\d{4}$/g);
        }
    }

    function validateFieldWithRegex(selector, pattern) {
        if (pattern.test(selector.val()) === false) {
            allFieldsAreValid = false;
            selector.css('border', '1px solid red');
        } else {
            selector.css('border', 'none');
        }
    }
}