class Database {
    kv: Deno.KvStorage;

    constructor() {
    }

    async open(): Promise<void> {
        this.kv = await Deno.openKv();
    }

    async list(key: string): Promise<Array<Deno.KvEntry>> {
        const result: Array<unknown> = [];
        const records: Deno.KvListIterator<Deno.KvEntry> = this.kv.list({prefix: [key]});
        for await (const record of records) {
            result.push(record.value);
        }
        return result;
    }

    set(key: string, entry: string, value: unknown): Promise<Deno.KvCommitResult> {
        return this.kv.set([key, entry], value);
    }

    async get(key: string, entry: string): Promise<Deno.KvEntry | null> {

        const dbEntry = await this.kv.get([key, entry]);

        return dbEntry.value ? dbEntry.value : null;
    }

    async delete(key: string, entry: string): Promise<void> {
        await this.kv.delete([key, entry]);
    }
}

export { Database };
