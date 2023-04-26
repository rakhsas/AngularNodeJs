import { MatInputModule } from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgModule } from '@angular/core';

@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatInputModule,
		MatExpansionModule
	],
})

export class MaterialImports { }
