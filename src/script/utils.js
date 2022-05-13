import { validationSettings } from "./constants";

export function disabledButtonSave(button) {
    button.classList.add(validationSettings.buttonClass);
    button.setAttribute('disabled', 'true');
};
export function renderCardLoading(isLoading, form) {
    if (isLoading) {
      form.querySelector(
        validationSettings.buttonSelector
      ).textContent = 'Сохранение...';
    } else {
      form.querySelector(
        validationSettings.buttonSelector
      ).textContent = 'Создать';
    }
}
export function renderProfileLoading(isLoading, form) {
    if (isLoading) {
      form.querySelector(
        validationSettings.buttonSelector
      ).textContent = 'Сохранение...';
    } else {
      form.querySelector(
        validationSettings.buttonSelector
      ).textContent = 'Сохранить';
    }
}