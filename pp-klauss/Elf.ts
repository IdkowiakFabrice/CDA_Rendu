import Packaging from "./Packaging"
import Toy from "./Toy"

export default class Elf {

    private _nickname: string

    constructor(nickname: string) {
        this._nickname = nickname
    }

    getNickname(): string {
        return this._nickname
    }

    setNickname(nickname: string): void {
        this._nickname = nickname
    }

    pack(packaging: Packaging, toy: Toy): void {

        if (packaging.getIsOpen() === false) {
            console.log("Sorry this package is not open");
        } else if (packaging.getToy() !== null) {
            console.log("Sorry this package already filled");
        }else if (packaging.getIsOpen() === true && packaging.getToy() === null) {
            packaging.insert(toy)
            console.log("Yeaaaah! Just packing the toy ~~ " + toy.getToy() + " ~~")
        } 
    }
   
    unpack(packaging: Packaging): void {
        if(packaging.getToy() === null || packaging.getIsOpen() === true){
            console.log('Sorry this package is already empty')
        }
        else{
            packaging.unpackToy()
            console.log('Ooooooh! Just unpacking the toy ~~ X ~~')
        }
    }
}