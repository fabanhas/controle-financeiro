import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceberPage } from './receber.page';

describe('ReceberPage', () => {
  let component: ReceberPage;
  let fixture: ComponentFixture<ReceberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
