import { Component, OnInit, NgModule } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-lazy',
  templateUrl: 'lazy.component.html'
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
