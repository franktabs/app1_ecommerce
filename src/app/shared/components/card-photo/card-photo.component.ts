import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss']
})
export class CardPhotoComponent {

    @Input() color:string = "white";
    @Input() image!:{src:string, alt:string} ;
    @Input() texts!:string[];



}
