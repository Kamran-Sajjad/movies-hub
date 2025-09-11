import React from "react";
import { InputField } from "../../components/ui/fields/InputField";
import { PasswordField } from "../../components/ui/fields/PasswordField";
import { CheckboxField } from "../../components/ui/fields/CheckBoxField";
import { RadioField } from "../../components/ui/fields/RadioField";
import { INPUT_FIELD_TYPES } from "../../utils/data/FieldData";

export const FieldFactory = ({ field, register, error }) => {
  const {
    name,
    type,
    placeholder,
    label,
    options,
    inputFieldType,
  } = field;

  switch (inputFieldType) {
    case INPUT_FIELD_TYPES.CHECKBOX:
      return (
        <CheckboxField
          name={name}
          label={label}
          register={register}
          error={error}
        />
      );

    case INPUT_FIELD_TYPES.RADIO:
      return (
        <RadioField
          name={name}
          options={options}
          register={register}
          error={error}
        />
      );

    case INPUT_FIELD_TYPES.PASSWORD:
      return (
        <PasswordField
          name={name}
          placeholder={placeholder}
          register={register}
          error={error}
        />
      );

    default:
      return (
        <InputField
          name={name}
          type={type}
          placeholder={placeholder}
          register={register}
          error={error}
        />
      );
  }
};
