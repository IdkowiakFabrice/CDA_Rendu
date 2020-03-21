export default class Toy {

    private type: string;
    constructor() {
        this.type = ''
    }

    public isMoved(): void {
    }

    public getToy(): string {
        return this.type
    }
}