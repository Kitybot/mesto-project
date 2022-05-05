import { validationSettings } from "./constants";
export function disabledSaveButton(cardSaveButtom) {
    cardSaveButtom.classList.add(validationSettings.buttonClass);
    cardSaveButtom.disabled = true;
};
  