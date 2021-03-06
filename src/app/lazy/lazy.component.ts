import { Component, OnInit, NgModule } from '@angular/core';
import { ChildrenModule } from '../children/children.component';

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
  imports: [ChildrenModule],
  exports: [],
  declarations: [LazyComponent],
  providers: [],
})
class LazyModule { }
