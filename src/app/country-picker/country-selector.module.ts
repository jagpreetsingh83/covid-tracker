import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';



@NgModule({
  declarations: [CountrySelectorComponent],
  imports: [
    CommonModule
  ],
  exports : [CountrySelectorComponent]
})
export class CountrySelectorModule { }
