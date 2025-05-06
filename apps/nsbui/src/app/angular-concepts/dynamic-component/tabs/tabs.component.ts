import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'ngx-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <a>{{ tab.tabTitle }}</a>
      </li>
      <li
        *ngFor="let tab of dynamicTabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <a>{{ tab.tabTitle
          }}<span *ngIf="tab.isClosable" (click)="closeTab(tab)">X</span></a
        >
      </li>
    </ul>
    <ng-content></ng-content>
    <!-- <ng-content  #container></ng-content> -->
    <ng-template #container *ngIf="true"></ng-template>
    <!-- <ng-container #container *ngIf="true"></ng-container> -->
  `,
  styles: [
    `
      a {
        padding: 20px;
      }
      span {
        padding: 0 5px;
        display: inline-block;
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;
  @ViewChild('container', { read: ViewContainerRef })
  vc!: ViewContainerRef;
  dynamicTabs: TabComponent[] = [];

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  createTab(tabTitle: any, template: any, data: any, isCloseable = false) {
    let tabComponentRef = this.vc.createComponent(TabComponent);
    let tabComponent = tabComponentRef.instance;
    tabComponent.tabTitle = tabTitle;
    tabComponent.dataContenxt = data;
    tabComponent.template = template;
    tabComponent.isClosable = isCloseable;
    this.dynamicTabs.push(tabComponent);
    this.selectTab(tabComponent);
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    this.dynamicTabs.forEach((tab: any) => (tab.active = false));
    // activate the tab the user has clicked on.
    tab.active = true;
  }

  closeTab(tab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        this.dynamicTabs.splice(i, 1);
        this.vc.remove(i);
        this.selectTab(this.tabs.first);
        break;
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter((tab) => tab.active === true);
    if (activeTabs.length > 0) {
      this.closeTab(activeTabs[0]);
    }
  }
}
