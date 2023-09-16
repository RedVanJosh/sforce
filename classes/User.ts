
class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    constructor (firstName: string, lastName: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export { User };