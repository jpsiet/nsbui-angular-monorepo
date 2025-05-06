import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }


  @Output() removeSkill  = new EventEmitter<any>()

  @Input() skill:any;
  @Input() formGroupName:any

  ngOnInit(): void {

  }

  handleRemoveSkill(){
   this.removeSkill.emit(this.formGroupName);
  }

}
