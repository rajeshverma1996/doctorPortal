import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn:'root'
}
)
export class FormAsynValidator {
passwordValidate(control: AbstractControl): ValidationErrors {
  const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (control.value && !passwordRegexp.test(control.value)) {
    return { wrongformat: true }
  } else {
    return {}
  }
}
matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): { [key: string]: boolean } => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }else{
      return {}
    }
  }
}
emailValidation(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors> => {
    const reqProm = new Promise<ValidationErrors>(
      (resolve, reject) => {
        const emailRegexp = /^[_a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (control.value === '') {
          resolve({});
        } else if (!emailRegexp.test(control.value)) {
          resolve({ invalidEmail: true });
        } else {
                resolve({});
        }
      });
    return reqProm;
  }
}

mobileValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors> => {
    const reqProm = new Promise<ValidationErrors>(
      (resolve, reject) => {
        const mobileexp = /^(\+\d{1,3}[- ]?)?[1-9]{1}\d{9}$/; //    /^\(?([1-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        if (control.value === '') {
          resolve({});
        } else if (!mobileexp.test(control.value)) {
          resolve({ invalidNumber: true });
        } else {
                resolve({});
        }
      });
    return reqProm;
  }
}

UsernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors> => {
    const reqProm = new Promise<ValidationErrors>(
      (resolve, reject) => {
        const userNameExp = /^(?=.{8,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
        if (control.value === '') {
          resolve({});
        } else if(!userNameExp.test(control.value)) {
          resolve({ invalidUserName: true });
        }else{
          resolve ({})
        }
      });
    return reqProm;
  }
}
}
