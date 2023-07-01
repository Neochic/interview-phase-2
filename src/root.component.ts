import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./root.component.scss'],
  template: `
    <h1>User Generator</h1>
  `,
  standalone: true
})
export class RootComponent {}

bootstrapApplication(RootComponent);
