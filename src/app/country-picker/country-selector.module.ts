import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';

@NgModule({
  declarations: [CountrySelectorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CountrySelectorComponent]
})
export class CountrySelectorModule {}
