import {RouterModule, Routes} from "@angular/router";
import {ProvinciaDetailsComponent} from "./provincia-details.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
    {
        path: '',
        component: ProvinciaDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProvinciaDetailsRoutingModule {}
