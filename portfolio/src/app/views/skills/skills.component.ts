import { ViewType } from '../../enums/view-type';
import { ViewService } from '../../services/view-service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  type:ViewType = ViewType.SKILLS

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {

  }
}
