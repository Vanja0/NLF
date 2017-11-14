import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BookService } from './book.service';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  providers: [
    BookService
  ],
  exports: [BookComponent]
})
export class BookModule { }
