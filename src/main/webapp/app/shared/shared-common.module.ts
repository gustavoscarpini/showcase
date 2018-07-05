import { NgModule } from '@angular/core';

import { ShowcaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ShowcaseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ShowcaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ShowcaseSharedCommonModule {}
