import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaPage } from './tela.page';

describe('TelaPage', () => {
  let component: TelaPage;
  let fixture: ComponentFixture<TelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
