import { validationSettings } from "./constants";

export function disabledButtonSave(button) {
    button.classList.add(validationSettings.buttonClass);
    button.disabled = true;
};