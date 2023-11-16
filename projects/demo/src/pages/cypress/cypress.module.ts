import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaskitoModule} from '@maskito/angular';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiGroupModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {CypressDocPageComponent} from './cypress.component';
import {TestDocExample1} from './examples/1-predicate/component';
import {TestDocExample2} from './examples/2-native-max-length/component';
import {TestDocExample3} from './examples/3-mirrored-prefix-postfix/component';
import {TestDocExample4, TestPipe4} from './examples/4-runtime-postfix-changes/component';
import {TestDocExample5} from './examples/5-react-async-predicate/angular-wrapper';
import {TestDocExample6} from './examples/6-multi-character-prefix/component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaskitoModule,
        TuiInputModule,
        TuiGroupModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(CypressDocPageComponent)),
    ],
    declarations: [
        CypressDocPageComponent,
        TestDocExample1,
        TestDocExample2,
        TestDocExample3,
        TestDocExample4,
        TestPipe4,
        TestDocExample5,
        TestDocExample6,
    ],
    exports: [CypressDocPageComponent],
})
export class CypressDocPageModule {}
