/**
 * Fresh Imports
 */
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

/**
 * Custom Classes
 */
import { HttpResponse, HttpResponseException } from "../../../../classes/HttpResponse.ts";
import { Chunker } from "../../../../classes/Chunker.ts";
import { Database } from "../../../../classes/Database.ts";

/**
 * Initialize Database Instance
 */
const db = new Database();
await db.open();

/**
 * Handlers
 */
export const handler: Handlers = {

    /**
     * POST /v1/api/newstore/orderEvent
     * @description This endpoint chunks a large array of objects into smaller chunks and stores them in the database.
     * @param _request
     * @param props
     * @constructor
     */
    async POST(_request : Request, props: PageProps): Promise<Response> {
        const response: HttpResponse = new HttpResponse();

        const body: Array<object> = await _request.json();
        const chunker: Chunker = new Chunker(body, 1000);
        await chunker.chunkIt();

        response.status = '200';
        response.payload = {};

        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    },
};