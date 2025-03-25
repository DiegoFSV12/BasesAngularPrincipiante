import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './pages/main-page.component';



@NgModule({
  declarations: [dbzComponent],
  imports: [
    CommonModule
  ],
  exports: [
    dbzComponent
  ]
})
export class DbzModule { }
