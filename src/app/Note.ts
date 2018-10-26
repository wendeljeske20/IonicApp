import {NavController} from "ionic-angular";
import { NotePage } from "../pages/note/note";

export class Note {


    title: string;
    text: string;
    creationDate: string;
    modificationDate: string;
    

    constructor(title: string) {

        this.title = title;
        this.modificationDate = '26/10/18'

    }

    Print() {

    }

    /* Edit() {

        this.navCtrl.push(NotePage)
        console.log(this.title);
         
    } */

}