import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  SohoButtonModule,
  SohoComponentsModule,
  SohoDataGridModule,
  SohoFileUploadModule,
  SohoLocaleModule,
  SohoModalDialogModule
} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { DesignerComponent } from './designer/designer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProcessUploadComponent } from './process-list/process-upload/process-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalizeMenuComponent,
    ProcessListComponent,
    ProcessUploadComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SohoLocaleModule,
    SohoButtonModule,
    SohoLocaleInitializerModule,
    SohoComponentsModule,
    SohoDataGridModule,
    SohoButtonModule,
    SohoModalDialogModule,
    SohoFileUploadModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
