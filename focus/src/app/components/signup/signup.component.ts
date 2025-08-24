import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

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
