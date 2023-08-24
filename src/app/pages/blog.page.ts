
 import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>My Blog</h1>

     <router-outlet />
  `,
})
export default class BlogPage {
} 
