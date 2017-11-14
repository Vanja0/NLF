import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BookComponent } from './book-loans/book.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BookService } from './book-loans/book.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2SmartTableModule
      ],
      declarations: [
        AppComponent,
        BookComponent
      ],
      providers: [
        BookService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render table', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));
});
