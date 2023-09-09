class Database {
    constructor() {}

    async list(key: string): Promise<Array<unknown>> {
        const result: Array<unknown> = [];
        const db = await Deno.openKv();
        const records: Deno.KvListIterator<unknown> = db.list({ prefix: [key] });
        for await (const record of records) {
            result.push(record.value);
        }
        return result;
    }

    async set(key: string, entry : string, value: unknown): Promise<Deno.KvCommitResult> {
        const db = await Deno.openKv();
        return await db.set([key, entry], value);
    }

    async get(key: string, entry: string): Promise<unknown> {
        const db = await Deno.openKv();
        return Deno.KvEntry = db.get([key, entry]);
    }
}

export { Database };
