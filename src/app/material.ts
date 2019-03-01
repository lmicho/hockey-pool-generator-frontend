import { NgModule } from '@angular/core';

// Material Imports
import {
    MatInputModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material'

@NgModule({
    imports: [
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class MaterialModule { }