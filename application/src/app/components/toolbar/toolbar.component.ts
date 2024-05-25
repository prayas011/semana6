import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
constructor(private router:Router){}
goTo(route:string){
this.router.navigateByUrl(route);
}
}
