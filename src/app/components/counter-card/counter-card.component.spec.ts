import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCardComponent } from './counter-card.component';

describe('CounterCardComponent', () => {
  let component: CounterCardComponent;
  let fixture: ComponentFixture<CounterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
