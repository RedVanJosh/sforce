/**
 * Fresh Imports
 */
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

/**
 * Custom Classes
 */
import { Token } from "../../../../classes/Token.ts";
import { HttpResponse, HttpResponseException } from "../../../../classes/HttpResponse.ts";

export const handler: Handlers = {

    /**
     * POST /isml/[format]
     * @description This is a protected route. The Authorization header must contain a valid token.
     * @param _request
     * @param props
     * @constructor
     */
    async POST(_request : Request, props: PageProps): Promise<Response> {
        const response: HttpResponse = new HttpResponse();

        const { format } = props.params;
        response.status = '200';
        response.payload = {
            "some": "data"
        }

        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    },
};