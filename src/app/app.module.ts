import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService } from 'src/api/products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
     AppComponent,
     WelcomeComponent,
     NotfoundComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers:[ProductService]

})
export class AppModule { }
