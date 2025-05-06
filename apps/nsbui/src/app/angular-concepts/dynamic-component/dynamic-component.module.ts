import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { CashoverrideContComponent } from './cashoverride-cont/cashoverride-cont.component';
import { CashoverrideComponent } from './cashoverride/cashoverride.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicComponentRoutingModule } from './dynamic-comp-route.module';
import { PeopleListComponent } from './people/people-list.component';
import { TabsContComponent } from './tabs/tabs-cont.component';
import { TestComponent } from './people/test.component';
import { PersonEditComponent } from './people/people-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicComponent } from './cashoverride/basic.comp';
import { AddressFormComponent } from './address-form/address-form.component';
import { SkillComponent } from './skill/skill.component';
import { NgForParent } from './ngFor/ngForParent/ng-for-parent.component';
import { NgForChildOne } from './ngFor/ngForChildOne/ng-for-child-one.component';
import { DataObservableService } from './ngFor/data_observable';




@NgModule({
  declarations: [
    NgForParent,
    NgForChildOne,
    DynamicComponentComponent,
    TabsComponent,
    TabComponent,
    CashoverrideContComponent,
    CashoverrideComponent,
    PeopleListComponent,
    PersonEditComponent,
    BasicComponent,
    TestComponent,
    TabsContComponent,

    AddressFormComponent,
    SkillComponent,
  ],
  imports: [CommonModule, HttpClientModule,
            ReactiveFormsModule,
            DynamicComponentRoutingModule],
            providers:[DataObservableService]
})
export class DynamicComponentModule {}
