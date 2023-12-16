import { AbstractControl } from "@angular/forms";

export class MathValidators {
    static addition(srcOneName: string, srcTwoName: string, resultName: string) {
        return (form: AbstractControl) =>
            (parseInt(form.value[srcOneName]) + parseInt(form.value[srcTwoName])
                === parseInt(form.value[resultName]))
                ? null
                : { addition: true };
    }
}
