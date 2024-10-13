export interface IBook{
    id:string 
    title:string 
    author:string 
    price:number 
    photo:string
}

export interface IState{
    book:IBook[]
    search:string
}

