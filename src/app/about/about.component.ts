import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}

  toggleChild() {
    const currentUrl = this.router.url;
    const newUrl = currentUrl.endsWith('bob') ? '/about/susan' : '/about/bob';
    this.router.navigate([newUrl]);
  }
}
