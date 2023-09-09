import { Handlers } from "$fresh/server.ts";
import { Database } from "../../classes/Database.ts";

export const handler: Handlers = {
    async GET(_req : Record<string, unknown>) {
        const db : Database = new Database();
        await db.set('users', 'rei', {
            username: 'jrei',
            password:'1234test',
            firstName: 'Joshua',
            lastname: 'Rei'
        })
        console.log(await db.list('users'));
        console.log(await db.get('users', 'rei'));
        const uuid : string = crypto.randomUUID();
        return new Response(JSON.stringify(uuid), {
            headers: { "Content-Type": "application/json" },
        });
    },
}