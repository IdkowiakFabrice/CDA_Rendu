import Toy from "./Toy"

export default class Packaging{

    private toy : Toy | null = null
    private isOpen : boolean

    constructor(){
        this.isOpen = false
        this.toy = null
    }

    public open() : void{
       if(this.isOpen === false){
           this.isOpen = true 
       }
    }

    public insert(toy: Toy): void{
        this.toy = toy
        this.setIsOpen(false)
    }
    
    public getToy():Toy |null{
        return this.toy
    }

    public getIsOpen():boolean{
        return this.isOpen
    }
    public setIsOpen(status: boolean):void{
        this.isOpen = status
    }

    public unpackToy():void{
        this.toy = null 
        this.setIsOpen(true)
    }
}