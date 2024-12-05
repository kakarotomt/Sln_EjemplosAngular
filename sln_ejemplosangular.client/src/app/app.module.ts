import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Custom Components
import { DirectivesComponent } from './Components/directives/directives.component';
import { NgForComponent } from './Components/directives/ngfor/ngfor.component';
import { NgIfComponent } from './Components/directives/ngif/ngif.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { NavbarComponent } from './Components/shared/header/navbar/navbar.component';
import { IndexComponent } from './Components/index/index.component';
import { UserComponent } from './Components/user/user.component';

//Custom Services
import { UsuarioService } from './Services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    NgIfComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    DirectivesComponent,
    IndexComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
