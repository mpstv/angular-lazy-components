import { NgModule, Type } from "@angular/core";
import { ChildrenModule } from '../children/children.component';
import { LazyComponent } from './lazy.component';

@NgModule({
    imports: [ChildrenModule],
    exports: [],
    declarations: [LazyComponent],
    providers: [],
})
export class LazyModule {
    static getComp(): Type<LazyComponent> {
        return LazyComponent;
    }
}