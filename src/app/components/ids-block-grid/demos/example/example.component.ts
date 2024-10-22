import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example-block-grid',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsBlockGrid example AfterViewInit');
  }

}
