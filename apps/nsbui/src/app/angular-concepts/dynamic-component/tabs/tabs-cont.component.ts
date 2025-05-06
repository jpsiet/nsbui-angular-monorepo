import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { Person } from '../../es6/services/execution-context.service';

export interface People{
  id: number;  surname: string; twitter: string; name:string;
}
@Component({
  selector: 'app-tabs-cont-comp',
  template: `
    <h1>Angular tabs</h1>
    <ngx-tabs #tabs>
      <ngx-tab tabTitle="People List">
        <app-people-list [people]="people" (editPerson)="handleEditPerson($event)"
        (addPerson)="handleAddPerson()"></app-people-list>
      </ngx-tab>
      <ngx-tab tabTitle="Tab 2" [template]="personEdit" [dataContenxt]="{'name':'Jitendra'}">Tab 2 Content</ngx-tab>
    </ngx-tabs>

    <ng-template #personEdit let-person="data" >
    <app-person-edit [person]="person" (savePerson)="onPersonFormSubmit($event)"></app-person-edit>
    </ng-template>
  `
})
export class TabsContComponent implements OnInit, AfterViewInit {
  @ViewChild('personEdit') personEditTemplate:any;
  @ViewChild('tabs')
  tabs!: TabsComponent;
  people!: People[];


  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.personEditTemplate);
  }
  handleEditPerson(person:Person){
    this.tabs.createTab(`Editing ${person.name}`,this.personEditTemplate,person,true)
  }

  handleAddPerson(){
    this.tabs.createTab('vayu',this.personEditTemplate,{name:'vayu pratap singh'},true)
  }

  onPersonFormSubmit(dataModel:any) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

   this.tabs.closeActiveTab();
  }
}
