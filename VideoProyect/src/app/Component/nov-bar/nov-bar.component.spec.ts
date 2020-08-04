import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovBarComponent } from './nov-bar.component';

describe('NovBarComponent', () => {
  let component: NovBarComponent;
  let fixture: ComponentFixture<NovBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
