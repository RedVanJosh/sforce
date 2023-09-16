import { Database } from "./Database.ts";

const db: Database = new Database();
await db.open();

class Token {
    value: string;
    expires: Date;
    constructor (expiration: number) {
        this.value = this.generate();
        this.expires = new Date(Date.now() + expiration);
    }

    /**
     * Generate a random token
     */
    generate (): string {
        return crypto.randomUUID();
    }

    public static async get (id: string): Promise<Token|null> {
        const token: Deno.KvEntry = await db.get('tokens', id);
        return token ? token : null;
    }

    public static isExpired (token: Token): boolean {
        return token.expires < new Date();
    }
}

export { Token };