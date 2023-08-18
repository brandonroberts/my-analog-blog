
 import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>My Blog</h2>

     <router-outlet />
  `,
})
export default class BlogPage {
} 
