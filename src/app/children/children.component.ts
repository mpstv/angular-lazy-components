import { Component, OnInit, NgModule } from '@angular/core';

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

@NgModule({
  imports: [],
  exports: [ChildrenComponent],
  declarations: [ChildrenComponent],
  providers: [],
})
export class ChildrenModule { }
