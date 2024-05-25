import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-selector',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent {
  rojo: number = 0;
  verde: number = 0;
  azul: number = 0;
  colores: { hex: string }[] = [];

  agregarColor() {
    const hex = this.rgbAHex(this.rojo, this.verde, this.azul);
    this.colores.push({ hex });
  }

  rgbAHex(r: number, g: number, b: number): string {
    return `#${this.componenteAHex(r)}${this.componenteAHex(g)}${this.componenteAHex(b)}`;
  }
  verifyhex(hex2:number):string{
    if(hex2==10){
      return "a";
    }else if(hex2==11){
      return "b";
    }else if(hex2==12){
      return "c";
    }else if(hex2==13){
      return "d"
    }else if(hex2==14){
      return "e";
    }else if(hex2==15){
      return "f";
    }
    return hex2.toString();
  }
  componenteAHex(c: number): string {
    const hex = c/16;
    const hex2 = (hex - Math.trunc(hex)) * 16;
    const hexTrunc = Math.trunc(hex);
    return this.verifyhex(hexTrunc)+this.verifyhex(hex2);
    //return hex.length ==1 ? '0' + hex : hex;
  }
}
