import Toy from './Toy'

export default class Pony extends Toy {
    private static _nb: number = 1;
    private id: number = 0

    constructor() {
        super()
        this.id = Pony._nb
        Pony._nb++
        this.ponySing()
    }

    public getToy(): string {
        return 'pony ' + this.id
    }

    public isMoved(): void {
        console.log('Huuuuuuhu!')
    }

    public ponySing(): void {
        console.log(`${this.getToy()} is singing -->
        'Dou-double poney, j’fais izi money'
        'D’où tu m’connais ? Parle moi en billets violets'
        'Dou-double poney, j’fais izi money `
        )
    }
}