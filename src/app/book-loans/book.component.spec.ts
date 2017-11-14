import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';
import { BookService } from './book.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let source: LocalDataSource;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2SmartTableModule],
      declarations: [ BookComponent ],
      providers: [BookService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    source = new LocalDataSource();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add one book', async( () => {
    source.add({'id': '1', 'name': 'Don Quixote', 'author': 'Miguel de Cervantes', 'genre': 'Novel', 'loaned': 'No'});
    source.getAll().then(
      res => expect(res).toEqual(
        [{'id': '1', 'name': 'Don Quixote', 'author': 'Miguel de Cervantes', 'genre': 'Novel', 'loaned': 'No'}]));
  }));

  it('should filter only loaned books', () => {
    source.add({'id': '1', 'name': 'Don Quixote', 'author': 'Miguel de Cervantes', 'genre': 'Novel', 'loaned': 'No'});
    source.add({'id': '2', 'name': 'War and Peace', 'author': 'Leo Tolstoy', 'genre': 'Novel', 'loaned': 'No'});
    source.add({'id': '3', 'name': 'Moby-Dick', 'author': 'Herman Melville', 'genre': 'Novel', 'loaned': 'Yes'});

    source.setFilter([{field: 'loaned', search: 'yes'}]).getFilteredAndSorted().then(
      res => expect(res).toEqual([{'id': '3', 'name': 'Moby-Dick', 'author': 'Herman Melville', 'genre': 'Novel', 'loaned': 'Yes'}]));
  });
});
