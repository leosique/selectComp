import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RevoGridModule } from '@revolist/angular-datagrid';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RevoGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
