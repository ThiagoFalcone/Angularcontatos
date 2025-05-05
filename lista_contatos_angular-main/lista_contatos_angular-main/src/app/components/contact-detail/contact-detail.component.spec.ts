import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here
  it('should display contact details when input is provided', () => {
    // Test implementation would go here
  });

  it('should show "not found" message when no contact is provided', () => {
    // Test implementation would go here
  });
});

function expect(component: ContactDetailComponent) {
  throw new Error('Function not implemented.');
}
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

