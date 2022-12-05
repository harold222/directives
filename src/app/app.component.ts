import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  public className: string = 'selected';

  constructor() {
  }

  public change(): void {
    this.className = 
      this.className === 'selected' ? 
        'unSelected': 'selected';
  }
}
