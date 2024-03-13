import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss'],
})
export class SectionContactComponent {
  @ViewChild('contactForm') contactForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  async sendMail() {
    const phpUrl =
      'https://mathias-kohler.developerakademie.net/send_mail-portfolio.php';
    const action = phpUrl;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let fd = new FormData();

    this.resetFormStyle();
    this.disableFields(nameField, emailField, messageField, sendButton);
    
    if (this.checkedInputFields(nameField, emailField, messageField)) {
      this.showMissedInputFields(nameField, emailField, messageField);
    } 
    else {
      this.resetFormStyle()
      this.showFilledInputFields(nameField, emailField, messageField);
      this.createFormData(fd, nameField, emailField, messageField);
      /**send*/
      await fetch(action, {method: 'POST', body: fd});

      this.toggleOverlay();
      this.enableFields(nameField, emailField, messageField, sendButton);
      this.cleareFields();
    }
  }

  /**disable input*/
  disableFields(nameField, emailField, messageField, sendButton) {
    nameField.disable = true;
    emailField.disable = true;
    messageField.disable = true;
    sendButton.disable = true;
  }

  /**check input-fields, if-statem*/
  checkedInputFields(nameField, emailField, messageField) {
    return (
      nameField.value == '' || nameField.value == undefined || 
      emailField.value == '' || emailField.value == undefined || 
      messageField.value == '' || messageField.value == undefined
    );
  }

  /**style input fields*/
  showMissedInputFields(nameField, emailField, messageField) {
    let nameLableImageFilled = document.getElementById('lable__name--img-filled');
    let emailLableImageFilled = document.getElementById('lable__email--img-filled');
    let messageLableImageFilled = document.getElementById('lable__message--img-filled');
    let nameLableImageMissed = document.getElementById('lable__name--img-missed');
    let emailLableImageMissed = document.getElementById('lable__email--img-missed');
    let messageLableImageMissed = document.getElementById('lable__message--img-missed');
    let nameLableTextMissed = document.getElementById('lable__text--name-missed');
    let emailLableTextMissed = document.getElementById('lable__text--email-missed');
    let messageLableTextMissed = document.getElementById('lable__text--message-missed');

    if (this.checkedSingleInputField(nameField)) {
      this.styleMissedInput(nameField, nameLableTextMissed, nameLableImageMissed);
    }else{
      this.styleFilledInput(nameField, nameLableImageFilled);
    }
    if(this.checkedSingleInputField(emailField)){
      this.styleMissedInput(emailField, emailLableTextMissed, emailLableImageMissed);
    }else{
      this.styleFilledInput(emailField, emailLableImageFilled);
    }
    if(this.checkedSingleInputField(messageField)){
      this.styleMissedInput(messageField, messageLableTextMissed, messageLableImageMissed);
    } else {
      this.styleFilledInput(messageField, messageLableImageFilled);
    }
  }

  /**reset all input styles*/
  resetFormStyle(){
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let nameLableImageFilled = document.getElementById('lable__name--img-filled');
    let emailLableImageFilled = document.getElementById('lable__email--img-filled');
    let messageLableImageFilled = document.getElementById('lable__message--img-filled');
    let nameLableImageMissed = document.getElementById('lable__name--img-missed');
    let emailLableImageMissed = document.getElementById('lable__email--img-missed');
    let messageLableImageMissed = document.getElementById('lable__message--img-missed');
    let nameLableTextMissed = document.getElementById('lable__text--name-missed');
    let emailLableTextMissed = document.getElementById('lable__text--email-missed');
    let messageLableTextMissed = document.getElementById('lable__text--message-missed');
    
    this.resetInputStyle(nameField, nameLableImageFilled, nameLableImageMissed, nameLableTextMissed);
    this.resetInputStyle(emailField, emailLableImageFilled, emailLableImageMissed, emailLableTextMissed)
    this.resetInputStyle(messageField, messageLableImageFilled, messageLableImageMissed, messageLableTextMissed)
  }

  /**reset input style*/
  resetInputStyle(inputField, lableImageFilled, lableImageMissed, lableTextMissed){
    inputField.classList.remove("inputBorderFilled");
    lableImageFilled.style.display = 'none';

    inputField.classList.remove("inputBorderMissed");
    lableImageMissed.style.display = 'none';
    lableTextMissed.style.display = 'none';
  }

  /**check every input field value*/
  checkedSingleInputField(inputField){
    return (inputField.value == '' || inputField.value == undefined);
  }

  /**set missed style*/
  styleMissedInput(input, labelText, lableImage){
    input.classList.add("inputBorderMissed");
    labelText.style.display = 'flex'
    lableImage.style.display = 'flex'
  }

  /**set filled style*/
  styleFilledInput(input, lableImage){
    input.classList.add("inputBorderFilled");
    lableImage.style.display = 'flex'
  }

  /**style filled input-field*/
  showFilledInputFields(nameField, emailField, messageField){
    nameField.classList.add("inputBorderFilled");
    emailField.classList.add("inputBorderFilled");
    messageField.classList.add("inputBorderFilled");
  }

  /**send informations*/
  createFormData(fd, nameField, emailField, messageField) {
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    return;
  }

  /**enable input*/
  enableFields(nameField, emailField, messageField, sendButton) {
    nameField.disable = false;
    emailField.disable = false;
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
    overlay.classList.add('form__overlay--animation');
  }

  newForm(){
    this.toggleOverlay();
    this.resetFormStyle()
  }
}

