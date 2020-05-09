import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  template: `
    <p>
      children works!
    </p>
  `,
  styles: []
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
