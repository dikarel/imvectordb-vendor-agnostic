import { Embedding, Document } from './types';
declare class VectorDB {
    private worker;
    private requests;
    private documents;
    constructor();
    add(document: Document): Document | undefined;
    get(id: string): Document | undefined;
    del(document: Document): void;
    size(): number;
    loadFile(filename: string): Promise<void>;
    dumpFile(filename: string): Promise<void>;
    query(queryVector: Embedding, top_k?: number): Promise<any>;
    terminate(): Promise<void>;
}
export { Embedding, Document, VectorDB, };
