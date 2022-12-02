interface User {
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    isAdmin:boolean;
}

interface Car {
    id:number;
    name:string;
    price:number;
    type:string;
    nb_doors:number;
    year:number;
    description:string;
}

interface Devis {
    id:number;
    idUtilisateur:number;
    data:JsonDevis;
}

interface JsonDevis {
    totalprice : number;
    CarinDevis : Car[];
}

interface Car_Photos{
    idCar:number;
    Pictures:string[];
}


export type { User,Car_Photos,Devis,Car }