import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'r3mplac-ui';

  routes = [
    {linkName:'Search', url:'edu'},
    {linkName:'List', url:'edu/list'}
  ];
}
