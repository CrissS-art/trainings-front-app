import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TrainingsComponent } from "./components/trainings/trainings.component";
import { CartComponent } from "./components/cart/cart.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {path : 'trainings', component: TrainingsComponent },
    {path : 'cart', component: CartComponent },
    // {path : 'order', component : OrderComponent },
    // {path : 'customer', component : CustomerComponent },
    // {path : '', redirectTo: 'trainings' pathMatch: 'full' },
    {path : '404', component: NotFoundComponent },
    {path : '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }