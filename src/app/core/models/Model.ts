import { Product } from "./Product";
import { Prototype } from "./Prototype";


export abstract class Model implements Prototype<Model>{


    abstract clone(): Model ;
}
