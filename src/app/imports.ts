import { MatInputModule } from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatInputModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule
	],
})

export class MaterialImports { }
