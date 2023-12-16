import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css'
})
export class EquationComponent implements OnInit {
  FROM = 0;
  TO = 10;
  secondsPerSolution = 0;
  equationForm: FormGroup = new FormGroup({
    a: new FormControl(`${this.getRandomNumber(this.FROM, this.TO)}`),
    b: new FormControl(`${this.getRandomNumber(this.FROM, this.TO)}`),
    result: new FormControl('')
  }, [MathValidators.addition('a', 'b', 'result')]);
  get a() {
    return this.equationForm.controls.a.value;
  }
  get b() {
    return this.equationForm.controls.b.value;
  }
  get result() {
    return this.equationForm.controls.result.value;
  }
  getRandomNumber(from: number, to: number) {
    return Math.floor(Math.random() * (to - from + 1) + from)
  }
  ngOnInit() {
    this.updateEquationFormOnStatusChange();
  }
  updateEquationFormOnStatusChange() {
    this.equationForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(200),
      scan((acc) => {
        return {
          numbersSolved: acc.numbersSolved + 1,
          startTime: acc.startTime
        };
      }, { numbersSolved: 0, startTime: new Date() }))
      .subscribe(
        ({ numbersSolved, startTime }) => {
          this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numbersSolved / 1000;
          this.refreshEquationForm();
        }
      );
  }
  refreshEquationForm() {
    this.equationForm.setValue({
      a: this.getRandomNumber(this.FROM, this.TO),
      b: this.getRandomNumber(this.FROM, this.TO),
      result: ''
    })
  }
}
