import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {
  MatSlideToggleModule
} from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { SequenceComponent } from './sequence/sequence.component';
import { DefenderSettingsComponent } from './defender-settings/defender-settings.component';
import {AttackerSettingsComponent} from "./attacker-settings/attacker-settings.component";
import { ResultComponent } from './result/result.component';
import {AttackerSettingsSmallComponent} from "./attacker-settings-small/attacker-settings.component";
import {MatSelectModule} from "@angular/material/select";
import {HistogrammService} from "./histogramm.service";
import {HistogrammsComponent} from "./histogramms/histogramms.component";

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
    MatDividerModule
  ],
  declarations: [AppComponent, SequenceComponent, DefenderSettingsComponent, AttackerSettingsComponent, ResultComponent, AttackerSettingsSmallComponent, HistogrammsComponent],
  providers: [HistogrammService],
  bootstrap: [AppComponent]
})
export class AppModule {}
