import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

//@Component({
  //selector: 'app-tab3',
  //templateUrl: 'tab3.page.html',
  //styleUrls: ['tab3.page.css']
//})
export class Tab3Page {
  // Your component code here
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  //declarations: [Tab3Page]
})
export class Tab3PageModule {}