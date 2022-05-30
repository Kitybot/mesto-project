import { validationSettings } from "./constants";

export function disabledButtonSave(button) {
    button.classList.add(validationSettings.buttonClass);
    button.setAttribute('disabled', 'true');
};
export function renderLoading(isLoading, form) {
  const button =  form.querySelector(validationSettings.buttonSelector);
    if (isLoading) {
     button.textContent = 'Сохранить...';
    } else {
     button.textContent = 'Сохранить';
    }
}
