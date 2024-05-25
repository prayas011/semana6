import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class calculatorComponent {
  operando1: number = 0;
  operando2: number = 0;
  resultado: number | null = null;

  operar(operacion: string) {
    switch (operacion) {
      case 'suma':
        this.resultado = this.operando1 + this.operando2;
        break;
      case 'resta':
        this.resultado = this.operando1 - this.operando2;
        break;
      case 'multi':
        this.resultado = this.operando1 * this.operando2;
        break;
      case 'divi':
        this.resultado = this.operando1 / this.operando2;
        break;
      case 'pote':
        this.resultado = Math.pow(this.operando1, this.operando2);
        break;
    }
  }
}
