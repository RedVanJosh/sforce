import { MiddlewareHandlerContext } from "$fresh/server.ts";
import {HttpResponse, HttpResponseException} from "../../classes/HttpResponse.ts";
import {User} from "../../classes/User.ts";

/**
 * Deno Imports
 */
import { decode } from "base64"
import { Database } from "../../classes/Database.ts";
const db : Database = new Database();
await db.open();

interface State {
    data: string;
}

export async function handler (request: Request, context: MiddlewareHandlerContext<State>) {
    const result: object = await validateRequest(request);
    const response: HttpResponse = new HttpResponse();

    if (result.valid === false) {
        response.status = '401';
        response.error = new HttpResponseException('Invalid credentials');
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    } else {
        return await context.next();
    }
}

/**
 * Validate the request
 * Content-Type header should be application/json
 * Authorization header should be a valid user email and password encoded in base64
 * @param request
 */
async function validateRequest (request : Request): Promise<object> {
    if (request.headers.get('Content-Type') !== 'application/json') {
        throw new Error('Invalid content type');
    }

    return await validateUser(request.headers.get('Authorization'));
}

/**
 * Validate the user
 * Decode the authorization header into a user email and password
 * Check if the user exists in the Database
 * @param authorization
 */
async function validateUser (authorization : string|null): Promise<object> {
    let user: User|null = null;
    let credentials: Array<string> = [];
    const result = {
        valid: true,
    };

    if (authorization) {
        const txtDecoder = new TextDecoder("utf-8");
        const decodedAuthorization: string = txtDecoder.decode((decode(authorization)));
        credentials = decodedAuthorization.split(':');
        user = await db.get('users', credentials[0]);
    }

    if (!user) {
        result.valid = false;
    } else if (user?.password !== credentials[1]) {
        result.valid = false;
    }

    return result;
}