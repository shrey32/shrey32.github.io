import { SKILL_SET } from './../../utils/constants';
import { ViewType } from '../../enums/view-type';
import { ViewService } from '../../services/view-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  type: ViewType = ViewType.SKILLS
  skillSet = SKILL_SET;

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {

  }
}
