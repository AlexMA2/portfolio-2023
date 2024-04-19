import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTagComponent } from './tech-tag.component';

describe('TechTagComponent', () => {
  let component: TechTagComponent;
  let fixture: ComponentFixture<TechTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
