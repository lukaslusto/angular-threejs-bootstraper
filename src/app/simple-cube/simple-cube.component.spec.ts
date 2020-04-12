import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCubeComponent } from './simple-cube.component';

describe('SimpleCubeComponent', () => {
  let component: SimpleCubeComponent;
  let fixture: ComponentFixture<SimpleCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
