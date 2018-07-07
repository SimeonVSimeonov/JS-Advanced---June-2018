class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }


    get clientId() {
        return this._clientId;
    }

    set clientId(id) {
        if (/^[0-9]{6}$/.test(id)) {
            this._clientId = id;
        } else {
            throw new TypeError("Client ID must be a 6-digit number")
        }
    }

    get email() {
        return this._email;
    }

    set email(mail) {
        if (/[A-Za-z0-9]+@[A-Za-z.]+/.test(mail)) {
            this._email = mail;
        } else {
            throw new TypeError("Invalid e-mail")
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = this.checkName(name, "First")
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = this.checkName(name, "Last");
    }

    checkName(name, type) {
        let pattern = /^.{3,20}$/;
        if (!pattern.test(name)) {
            throw new TypeError(`${type} name must be between 3 and 20 characters long`)
        }
        pattern = /^[A-Za-z]+$/;
        if (!pattern.test(name)) {
            throw new TypeError(`${type} name must contain only Latin characters`)
        }
        return name;
    }
}

let test = new CheckingAccount(111111, "test@abv.bg", "test", "test");
console.log(test);