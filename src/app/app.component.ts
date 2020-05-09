import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <button (click)="loadLazyComponent()">load lazy component</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-lazy-components-tutorial';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  loadLazyComponent() {
    this.viewContainerRef.clear();

    import("./lazy/lazy.component").then(({ LazyComponent }) => {
      this.viewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(LazyComponent)
      );
    });
  }
}
