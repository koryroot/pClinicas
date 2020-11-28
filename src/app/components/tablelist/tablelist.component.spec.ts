import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablelistComponent } from './tablelist.component';

describe('TablelistComponent', () => {
  let component: TablelistComponent;
  let fixture: ComponentFixture<TablelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablelistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
