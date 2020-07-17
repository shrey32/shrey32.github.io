import { ViewService } from './../../services/view-service';

import { Component, OnInit } from '@angular/core';
import { ViewType } from '../../enums/view-type';
//declare let Email: any;
import '../../../assets/js/smtp.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  type: ViewType = ViewType.CONTACT;

  name: string;
  email: string;
  message: string;

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {
    console.log("Contact Component Initialized")
  }

  sendMail = () => {
    const validationInfo = this.validate();
    if (validationInfo.error) {
      alert(validationInfo.msg);
    } else {
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'sharmashrey032@gmail.com',
        Password: '523A1DEA530787576154958814EBC7AC6F22',
        To: 'sharmashrey032@gmail.com',
        From: 'sharmashrey032@gmail.com',
        Subject: 'Email From ' + this.name +" ("+this.email+")",
        Body: this.message
      }).then(message => { alert(message); this.name='';this.email='';this.message='' });
    }
  }

  private validate = (): any => {
    if (!this.name || this.name.trim() === '') {
      return { error: true, msg: "Please enter Name" };
    } else if (!this.email || this.email.trim() === '') {
      return { error: true, msg: "Please enter Email" };
    } else if (!this.validateEmail(this.email)) {
      return { error: true, msg: "Email is invalid" };
    } else if (!this.message || this.message.trim() === '') {
      return { error: true, msg: "Please enter message" };
    } else {
      return { error: false };
    }

  }

  validateEmail = (email:string):boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

}
