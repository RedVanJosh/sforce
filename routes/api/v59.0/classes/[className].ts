/**
 * Fresh Imports
 */
import { Handlers, PageProps } from "$fresh/server.ts";

/**
 * Custom Classes
 */
import { Database } from "../../../../classes/Database.ts";
import { HttpResponse } from "../../../../classes/HttpResponse.ts";
import { Product2 } from "../../../../classes/Product2/Product2.ts";
import { Product2ChangeEvent } from "../../../../classes/Product2/Product2ChangeEvent.ts";

export const handler: Handlers = {

    /**
     * POST /v59.0/classes/[className]
     * @param _request Endpoint request
     * @param props Page props
     * @hanlder GET
     * @description Returns a Salesforce object class definition
     */
     GET(_request: Request, props: PageProps): Response {
        const response : HttpResponse = new HttpResponse();
        const { className } = props.params;

        /** Determine which class is be requested and return the appropriate response */
        switch (className) {
            case 'Product2':
                response.payload = new Product2();
                break;
            case 'Product2ChangeEvent':
                response.payload = new Product2ChangeEvent();
                break;
            default:
                response.payload = {};
        }

        response.status = '200';
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json"
            },
        });
    },
};