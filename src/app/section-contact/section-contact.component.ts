import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss'],
})
export class SectionContactComponent {
  @ViewChild('contactForm') contactForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  async sendMail() {
    const action = 'https://mathias-kohler.developerakademie.net/portfolio-mathias-kohler/send_mail-portfolio.php';
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.disableFields(nameField, mailField, messageField, sendButton);

    //>>>>> show animation
    
    let fd = new FormData();
    this.createFormData(fd, nameField, mailField, messageField);

    /**send*/
    await fetch(
      action,
      {
        method: 'POST',
        body: fd,
      }
    );

    //>>>>>>> show send message

    this.enableFields(nameField, mailField, messageField, sendButton);
  }

  /**disable input*/
  disableFields(nameField, mailField, messageField, sendButton) {
    nameField.disable = true;
    mailField.disable = true;
    messageField.disable = true;
    sendButton.disable = true;
  }

  /**send informations*/
  createFormData(fd, nameField, mailField, messageField){
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);
    return 
  }
  
  /**enable input*/
  enableFields(nameField, mailField, messageField, sendButton) {
    nameField.disable = false;
    mailField.disable = false;
    messageField.disable = false;
    sendButton.disable = false;
  }
}
