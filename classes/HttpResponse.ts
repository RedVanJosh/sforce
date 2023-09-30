import { Token } from "./Token.ts";

class HttpResponseException {
    message: string;
    constructor (message: string) {
        this.message = message;
    }
}

interface HttpResponse {
    status: string;
    token: Token;
    payload: object;
    error: HttpResponseException;
}

class HttpResponse {
    constructor () {
        this.status = '';
        this.payload = {};
    }
}

export { HttpResponseException, HttpResponse };