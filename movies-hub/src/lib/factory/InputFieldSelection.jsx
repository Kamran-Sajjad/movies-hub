import React from "react";
import { TextField } from "../../components/ui/fields/TextField";
import { PasswordField } from "../../components/ui/fields/PasswordField";
import { CheckboxField } from "../../components/ui/fields/CheckBoxField";
import { RadioField } from "../../components/ui/fields/RadioField";
import { INPUT_FIELD_TYPES } from "../../utils/data/FieldData";

const inputFieldSelector = (type) => {
  switch (type) {
    case INPUT_FIELD_TYPES.CHECKBOX:
      return CheckboxField;
    case INPUT_FIELD_TYPES.RADIO:
      return RadioField;
    case INPUT_FIELD_TYPES.PASSWORD:
      return PasswordField;
    default:
      return TextField;
  }
};

export const InputFieldSelection = ({ field, register, errorMessage }) => {
  const SelectedInputField = inputFieldSelector(field.inputFieldType);
  return (
    <SelectedInputField
      field={field}
      register={register}
      errorMessage={errorMessage}
    />
  );
};
