import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlbumsComponent } from './lista-albums.component';

describe('ListaAlbumsComponent', () => {
  let component: ListaAlbumsComponent;
  let fixture: ComponentFixture<ListaAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
