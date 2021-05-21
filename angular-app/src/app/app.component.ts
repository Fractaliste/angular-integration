import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
    this.test()
    console.log("Test")
    document.addEventListener('cat', (e) => {
      console.log("Event received into app Angular", e)
    })
  }

  private test() {
    console.log("Test")
  }
}
