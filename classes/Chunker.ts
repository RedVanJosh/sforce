import { Database } from "./Database.ts";
const db: Database = new Database();
await db.open();

class Chunker {
    data : Array<object>;
    size : number;
    constructor(data: Array<object>, size: number) {
        this.data = data;
        this.size = size;
    }

    async chunkIt(): Promise<void> {
        const chunkSize: number = this.size; // 1000 bytes = 1000/1024 = 9.765625 kilobytes

        const chunks: Array<object> = Array(Math.ceil(this.data.length / chunkSize)).fill(0).map((_, i) => {
            const start = i * chunkSize;
            const end = Math.min(this.data.length, (i + 1) * chunkSize);
            return this.data.slice(start, end);
        });

        let i = 0;
        for (const chunk of chunks) {
            i++;
            await db.set('nsChunk', 'chunk' + i , chunk);
        }

    }
}

export { Chunker };