import { AbstractControl } from '@angular/forms';
const arrMail: string[] = ['mail', 'gmail', 'ya', 'yandex']
const arrCom: string[] = ['com', 'ru', 'ua', 'io']

export function validateEmail(control: AbstractControl) {
  let value = control.value;
  if(!(value.search("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$") == 0)) {
    return { invalidUrl: true };
  }
  value = value.split("@")
  let arrHelp = value[1].split(".")
  
  if (arrHelp) {
    value = [value[0], ...arrHelp]

    if(value[0].length < 3) {
      return { invalidUrl: true };
    }
    if(!(arrMail.includes(value[1]))) {
      return { invalidUrl: true };
    }
    if(!(arrCom.includes(value[2]))) {
      return { invalidUrl: true };
    }
  }
  
  return null;
}