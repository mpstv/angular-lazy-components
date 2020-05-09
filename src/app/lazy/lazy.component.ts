import { Component, OnInit, NgModule } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      lazy works!
    </p>
    <app-children></app-children>
  `,
  styles: []
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [],
  exports: [],
  declarations: [LazyComponent, ChildrenComponent],
  providers: [],
})
class LazyModule { }
