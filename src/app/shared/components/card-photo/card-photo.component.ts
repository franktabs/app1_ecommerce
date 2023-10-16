import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss']
})
export class CardPhotoComponent implements OnInit {

    @Input() color:string = "white";
    @Input() image!:{src:string, alt:string} ;
    @Input() texts!:string[];

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


}
