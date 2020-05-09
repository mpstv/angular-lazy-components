import { Component, OnInit, NgModule } from '@angular/core';
import { ChildrenModule } from '../children/children.component';

@Component({
  selector: 'app-another-lazy',
  templateUrl: 'another-lazy.component.html'
})
export class AnotherLazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [ChildrenModule],
  exports: [],
  declarations: [AnotherLazyComponent],
  providers: [],
})
class AnotherLazyModule { }