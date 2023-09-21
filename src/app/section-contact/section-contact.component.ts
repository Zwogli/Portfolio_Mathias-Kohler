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

  // lableNameTextMissed = document.getElementById('lable-input-name-missed');
  // lableNameImageMissed = document.getElementById('lable-input-name-img-missed');
  // lableMailTextMissed = document.getElementById('lable-input-email-missed');
  // lableMailImageMissed = document.getElementById('lable-input-email-img-missed');
  // lableMessageTextMissed = document.getElementById('lable-input-message-missed');
  // lableMessageImageMissed = document.getElementById('lable-input-message-img-missed');

  async sendMail() {
    const phpUrl =
      'https://mathias-kohler.developerakademie.net/portfolio-mathias-kohler/send_mail-portfolio.php';
    const action = phpUrl;
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let fd = new FormData();

    this.disableFields(nameField, mailField, messageField, sendButton);
    this.removeClasses();
    
    if (this.checkedInputFields(nameField, mailField, messageField)) {
      this.showMissedInputFields(nameField, mailField, messageField);
    } 
    else {
      this.removeClasses()
      this.showFilledInputFields(nameField, mailField, messageField);
      this.createFormData(fd, nameField, mailField, messageField);
      /**send*/
      await fetch(action, {method: 'POST', body: fd});

      this.toggleOverlay();
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
    let lableNameTextMissed = document.getElementById('lable-input-name-missed');
    let lableNameImageMissed = document.getElementById('lable-input-name-img-missed');
    let lableMailTextMissed = document.getElementById('lable-input-email-missed');
    let lableMailImageMissed = document.getElementById('lable-input-email-img-missed');
    let lableMessageTextMissed = document.getElementById('lable-input-message-missed');
    let lableMessageImageMissed = document.getElementById('lable-input-message-img-missed');

    if (this.checkedSingleInputField(nameField)) {
      this.styleMissedInput(nameField, lableNameTextMissed, lableNameImageMissed);
    }else{
      nameField.classList.add("inputBorderFilled");
      document.getElementById('lable-input-name-img-filled').style.display = 'unset';
    }
    
    if(this.checkedSingleInputField(mailField)){
      this.styleMissedInput(mailField, lableMailTextMissed, lableMailImageMissed);
    }else{
      mailField.classList.add("inputBorderFilled");
      document.getElementById('lable-input-email-img-filled').style.display = 'unset';
    }
     
    if(this.checkedSingleInputField(messageField)){
      this.styleMissedInput(messageField, lableMessageTextMissed, lableMessageImageMissed);
    } else {
      messageField.classList.add("inputBorderFilled");
      document.getElementById('lable-input-message-img-filled').style.display = 'unset';
    }
  }

  /**reset field style*/
  removeClasses(){
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let lableNameTextMissed = document.getElementById('lable-input-name-missed');
    let lableNameImageMissed = document.getElementById('lable-input-name-img-missed');
    let lableMailTextMissed = document.getElementById('lable-input-email-missed');
    let lableMailImageMissed = document.getElementById('lable-input-email-img-missed');
    let lableMessageTextMissed = document.getElementById('lable-input-message-missed');
    let lableMessageImageMissed = document.getElementById('lable-input-message-img-missed');
    nameField.classList.remove("inputBorderMissed");
    nameField.classList.remove("inputBorderFilled");
    lableNameTextMissed.style.display = 'none';
    lableNameImageMissed.style.display = 'none';

    mailField.classList.remove("inputBorderMissed");
    mailField.classList.remove("inputBorderFilled");
    lableMailTextMissed.style.display = 'none';
    lableMailImageMissed.style.display = 'none';

    messageField.classList.remove("inputBorderMissed");
    messageField.classList.remove("inputBorderFilled");
    lableMessageTextMissed.style.display = 'none';
    lableMessageImageMissed.style.display = 'none';
  }

  /**check every input field value*/
  checkedSingleInputField(inputField){
    return (inputField.value == '' || inputField.value == undefined);
  }

  /**set style by missed input value*/
  styleMissedInput(input, labelText, labelImage){
    labelText.style.display = 'flex'
    labelImage.style.display = 'flex'
    input.classList.add("inputBorderMissed");
  }

  /**style filled input-field*/
  showFilledInputFields(nameField, mailField, messageField){
    nameField.classList.add("inputBorderFilled");
    mailField.classList.add("inputBorderFilled");
    messageField.classList.add("inputBorderFilled");
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

  /**response message form send*/
  toggleOverlay(){
    let overlay = document.getElementById('form__overlay');
    overlay.classList.toggle('hide-show');
  }

  newForm(){
    this.toggleOverlay();
    this.removeClasses()
  }
}

