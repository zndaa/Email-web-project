import { AbstractControl, ValidationErrors, Validator } from "@angular/forms"; // 🚀 FormGroup yerine AbstractControl ve ValidationErrors import ettik
import { Injectable } from "@angular/core"; 

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  
  // 🚀 validate fonksiyonunu arrow function (=>) yaptık ki 'this' bağlamı kaybolmasın!
  validate = (control: AbstractControl): ValidationErrors | null => {
    // FormGroup değerlerine güvenli bir şekilde erişmek için get() kullanalım:
    const password = control.get('password')?.value;
    const passwordConfirmation = control.get('passwordConfirmation')?.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}