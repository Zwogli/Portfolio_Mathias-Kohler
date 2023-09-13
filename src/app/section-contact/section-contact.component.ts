import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {
  @ViewChild('contactForm') contactForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  
  

  async sendMail(){
    //action="https://'path'"

    let nameField =this.nameField.nativeElement;
    let messageField =this.messageField.nativeElement;
    let senButton = this.sendButton.nativeElement;

    nameField.disable = true;
    messageField.disable = true;
    senButton.disable = true;

    // show animation

    let  fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    //await fetch(path,
    // {
    //   method: 'POST'
    // body: fd
    // });

    // show send message

    nameField.disable = false;
    messageField.disable = false;
    senButton.disable = false;
  }

}
