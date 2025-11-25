import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialControl } from './material-control';

describe('MaterialControl', () => {
  let component: MaterialControl;
  let fixture: ComponentFixture<MaterialControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
