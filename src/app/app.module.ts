import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './comps/IO/parent/parent.component';
import { ChildComponent } from './comps/IO/parent/child/child.component';
import { ChildOutputComponent } from './comps/IO/parent/child-output/child-output.component';
import { MyNgModelParentComponent } from './comps/IO/my-ng-model-parent/my-ng-model-parent.component';
import { MyNgModelChildComponent } from './comps/IO/my-ng-model-parent/my-ng-model-child/my-ng-model-child.component';







@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent,
    MyNgModelParentComponent,
    MyNgModelChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
