import { Routes, RouterModule} from "@angular/router"
import { NgModule } from "@angular/core"

import { HomeComponent } from "./home/home.component"
import { SigninComponent } from "./signin/signin.component"
import { LoginComponent } from "./login/login.component"


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'login', component: LoginComponent}
]

@NgModule({
    declarations: [], 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRouting{

}

