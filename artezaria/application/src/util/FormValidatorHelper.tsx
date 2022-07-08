export const isFieldValid = (fieldError: string) => {
    return fieldError === '';
}

export const isFormValid = (fieldsErrors: string[]) => {
    return fieldsErrors.every(v => v === '');
}