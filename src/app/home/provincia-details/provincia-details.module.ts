import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import {ProvinciaDetailsComponent} from "./provincia-details.component";
import {ProvinciaDetailsRoutingModule} from "./provincia-details.routing.module";
import { WeatherService } from './weather.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProvinciaDetailsRoutingModule,
        HttpClientModule
    ],
    providers: [WeatherService],
    declarations: [
        ProvinciaDetailsComponent
    ]
})
export class ProvinciaDetailsModule {}
