import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  

})
export class SigninComponent {
  email = '';
  password = '';

  onSubmit() {
    if(this.email === 'test@example.com' && this.password === '123456') {
  console.log(`${this.email} + ${this.password}`);
    } else {
        console.log(` else hh ${this.email} + ${this.password}`);

    }
  }

}
