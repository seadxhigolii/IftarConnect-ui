import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms'; 
import { SliderModule } from 'primeng/slider'; 
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    DropdownModule,
    MultiSelectModule,
    ProgressBarModule,
    FormsModule,
    SliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
