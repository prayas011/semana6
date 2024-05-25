import { Routes } from '@angular/router';
import { calculatorComponent } from './components/calculator/calculator.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';

export const routes: Routes = [
    {path:'Calculator',component:calculatorComponent},
    {path:'Color_Selector',component:ColorSelectorComponent}
];
