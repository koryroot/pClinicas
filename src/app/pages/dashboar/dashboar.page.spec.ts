import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboarPage } from './dashboar.page';

describe('DashboarPage', () => {
  let component: DashboarPage;
  let fixture: ComponentFixture<DashboarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
