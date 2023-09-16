import { MiddlewareHandlerContext } from "$fresh/server.ts";
import {Token} from "../../../classes/Token.ts";
import {HttpResponse, HttpResponseException} from "../../../classes/HttpResponse.ts";

interface State {
    data: string;
}

export async function handler (request: Request, context: MiddlewareHandlerContext<State>) {
    const authorization: string|null = request.headers.get('authorization');
    let tokenId: string | undefined;
    let token: Token | null = null;
    if (authorization !== null) {
        tokenId = authorization.split(' ')[1];
        token = await Token.get(tokenId);
    }

    const response: HttpResponse = new HttpResponse();

    if (token !== null) {
        if (Token.isExpired(token) === false) {
            return await context.next();
        } else {
            response.status = '401';
            response.error = new HttpResponseException('Token has expired.');
            return new Response(JSON.stringify(response), {
                headers: {
                    "Content-Type": "application/json"
                },
            });
        }
    } else {
        response.status = '400';
        response.error = new HttpResponseException('Invalid request.');
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    }
}