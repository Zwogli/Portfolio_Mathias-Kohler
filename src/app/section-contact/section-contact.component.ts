import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {
  @ViewChild('contactForm') contactForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  
  

  async sendMail(){
    const action="https://mathias-kohler.developerakademie.net/portfolio-mathias-kohler/send_mail-portfolio.php"

    let nameField =this.nameField.nativeElement;
    let mailField =this.mailField.nativeElement;
    let messageField =this.messageField.nativeElement;
    let senButton = this.sendButton.nativeElement;

    /**disable input*/
    nameField.disable = true;
    mailField.disable = true;
    messageField.disable = true;
    senButton.disable = true;

    // show animation

    /**send informations*/
    let  fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);

    // send
    await fetch('https://mathias-kohler.developerakademie.net/portfolio-mathias-kohler/send_mail-portfolio.php',
    {
      method: 'POST',
      body: fd
    });

    // show send message

    /**enable input*/
    nameField.disable = false;
    mailField.disable = false;
    messageField.disable = false;
    senButton.disable = false;
  }

}
