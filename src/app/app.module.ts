import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { SequenceComponent } from './sequence/sequence.component';
import { DefenderSettingsComponent } from './defender-settings/defender-settings.component';
import { ResultComponent } from './result/result.component';
import { AttackerSettingsSmallComponent } from './attacker-settings-small/attacker-settings.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { HistogrammService } from './histogramm.service';
import { HistogrammsComponent } from './histogramms/histogramms.component';
import {CounterInputComponent} from "./controls/counter/counter-input.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatCardModule,
        MatDividerModule,
    ],
    declarations: [
        AppComponent,
        SequenceComponent,
        DefenderSettingsComponent,
        ResultComponent,
        AttackerSettingsSmallComponent,
        HistogrammsComponent,
        CounterInputComponent
    ],
    providers: [HistogrammService],
    bootstrap: [AppComponent],
})
export class AppModule {}
