import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home/Home.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { SearchComponent } from "./Search/Search.component";
import { HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
