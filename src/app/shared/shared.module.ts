import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,


    ],
    declarations: [
        NavbarComponent
     ],
    exports: [
        NavbarComponent
    ],

})
export class SharedModule { }
