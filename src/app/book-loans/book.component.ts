import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  private source: LocalDataSource;
  private click = true;
  private settings: object;

  constructor(private bookService: BookService) {

    this.source = new LocalDataSource();

    bookService.getAllBooks().subscribe(
      (res) => {

        this.source.load(res);

      },
      (error) => console.log('error : ' + error)
    );

    this.settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Name'
        },
        author: {
          title: 'Author'
        },
        genre: {
          title: 'Genre'
        },
        loaned: {
          title: 'Loaned',
          filter: {
            type: 'select'
          },
        },
        loanedBy: {
          title: 'Loaned By'
        }
      }
    };
  }

  showLoanedBooks() {

    if (this.click) {
      this.source.setFilter([{field: 'loaned', search: 'yes'}]);
      this.click = false;
    } else {
      this.source.setFilter([]);
      this.click = true;
    }
  }

  ngOnInit() {
  }

}
