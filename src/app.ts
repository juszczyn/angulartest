import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    templateUrl: 'dist/app.html'
})
export class AppComponent {
   // name: string = 'World';
}

bootstrap(AppComponent);