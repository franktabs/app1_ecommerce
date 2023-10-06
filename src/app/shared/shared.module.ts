import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';



@NgModule({
  declarations: [
    CardPhotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardPhotoComponent
  ]
})
export class SharedModule { }
