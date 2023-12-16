import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

export class MatchPassword implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const { password, passwordConfirmation } = control.value;
        return password === passwordConfirmation ? null : { passwordsDontMatch: true };
    }

}
