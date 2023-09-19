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
    const phpUrl =
      'https://mathias-kohler.developerakademie.net/portfolio-mathias-kohler/send_mail-portfolio.php';
    const action = phpUrl;
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let lableNameField = document.getElementById('lable-input-name-missed');
    let lableMailField = document.getElementById('lable-input-email-missed');
    let lableMessageField = document.getElementById('lable-input-message-missed');
    let fd = new FormData();

    this.disableFields(nameField, mailField, messageField, sendButton);
    this.removeClasses(nameField, lableNameField, mailField, lableMailField, messageField,lableMessageField);
    
    if (this.checkedInputFields(nameField, mailField, messageField)) {
      this.showMissedInputFields(nameField, mailField, messageField);
    } 
    else {
      this.removeClasses(nameField, lableNameField, mailField, lableMailField, messageField,lableMessageField)
      this.showFilledInputFields(nameField, mailField, messageField);
      this.createFormData(fd, nameField, mailField, messageField);
      /**send*/
      await fetch(action, {method: 'POST', body: fd});

      //>>>>>>> show send message

      this.enableFields(nameField, mailField, messageField, sendButton);
      this.cleareFields();
    }
  }

  /**disable input*/
  disableFields(nameField, mailField, messageField, sendButton) {
    nameField.disable = true;
    mailField.disable = true;
    messageField.disable = true;
    sendButton.disable = true;
  }

  /**check input-fields, if-statem*/
  checkedInputFields(nameField, mailField, messageField) {
    return (
      nameField.value == '' || nameField.value == undefined || 
      mailField.value == '' || mailField.value == undefined || 
      messageField.value == '' || messageField.value == undefined
    );
  }

  /**style missed input-field*/
  showMissedInputFields(nameField, mailField, messageField) {
    let lableNameField = document.getElementById('lable-input-name-missed');
    let lableMailField = document.getElementById('lable-input-email-missed');
    let lableMessageField = document.getElementById('lable-input-message-missed');

    if (this.checkedSingleInputField(nameField)) {
      this.styleMissedInput(nameField, lableNameField);
    }else{
      nameField.classList.add("filledInput");
      // lableNameField.style.display = 'none';
    } if(this.checkedSingleInputField(mailField)){
      this.styleMissedInput(mailField, lableMailField);
    }else{
      mailField.classList.add("filledInput");
      // lableMailField.style.display = 'none';
    }
     if(this.checkedSingleInputField(messageField)){
      this.styleMissedInput(messageField, lableMessageField);
    } else {
      messageField.classList.add("filledInput-message");
      // lableMessageField.style.display = 'none';
    }
  }

  removeClasses(nameField, lableNameField, mailField, lableMailField, messageField,lableMessageField){
    nameField.classList.remove("missedInput");
    nameField.classList.remove("filledInput");
    lableNameField.style.display = 'none';
    mailField.classList.remove("missedInput");
    mailField.classList.remove("filledInput");
    lableMailField.style.display = 'none';
    messageField.classList.remove("missedInput-message");
    messageField.classList.remove("filledInput-message");
    lableMessageField.style.display = 'none';
  }

  /**check every input field value*/
  checkedSingleInputField(inputField){
    return (inputField.value == '' || inputField.value == undefined);
  }

  /**set style by missed input value*/
  styleMissedInput(input, lable){
    lable.style.display = 'flex'
    if(input.id === 'input-message'){
      input.classList.add("missedInput-message");
    }else{
      input.classList.add("missedInput");
    }
  }

  /**style filled input-field*/
  showFilledInputFields(nameField, mailField, messageField){
    nameField.classList.add("filledInput");
    mailField.classList.add("filledInput");
    messageField.classList.add("filledInput-message");
  }

  /**send informations*/
  createFormData(fd, nameField, mailField, messageField) {
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);
    return;
  }

  /**enable input*/
  enableFields(nameField, mailField, messageField, sendButton) {
    nameField.disable = false;
    mailField.disable = false;
    messageField.disable = false;
    sendButton.disable = false;
  }

  /**reset value*/
  cleareFields(){
    let contactForm = this.contactForm.nativeElement;
    contactForm.reset();
  }
}
