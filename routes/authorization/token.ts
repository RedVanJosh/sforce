/**
 * Fresh Imports
 */
import { Handlers } from "$fresh/server.ts";

/**
 * Custom Classes
 */
import { Database } from "../../classes/Database.ts";
import { Token } from "../../classes/Token.ts";
import { HttpResponse } from "../../classes/HttpResponse.ts";

/**
 * Global Variables
 */
const db : Database = new Database();
await db.open();

export const handler: Handlers = {

    /**
     * POST /api/token
     * @param _request Endpoint request
     * @constructor
     */
    async POST(_request : Request): Promise<Response> {
        const response: HttpResponse = new HttpResponse();
        const token: Token = new Token(900000);
        await db.set('tokens', token.value, token);
        response.status = '200';
        response.token = token;

        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    },
};