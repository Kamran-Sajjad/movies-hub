export const INPUT_FIELD_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
  CHECKBOX: "checkbox",
  RADIO: "radio",
};

export const LOGIN_INPUT_FIELDS = [
  {
    name: "email",
    type: INPUT_FIELD_TYPES.EMAIL,
    placeholder: "Email",
    inputFieldType: INPUT_FIELD_TYPES.TEXT,
  },
  {
    name: "password",
    type: INPUT_FIELD_TYPES.PASSWORD,
    placeholder: "Password",
    inputFieldType: INPUT_FIELD_TYPES.PASSWORD,
  },
];

export const SIGNUP_INPUT_FIELDS = [
  {
    name: "name",
    type: INPUT_FIELD_TYPES.TEXT,
    placeholder: "Name",
    inputFieldType: INPUT_FIELD_TYPES.TEXT,
  },
  {
    name: "email",
    type: INPUT_FIELD_TYPES.EMAIL,
    placeholder: "Email",
    inputFieldType: INPUT_FIELD_TYPES.TEXT,
  },
  {
    name: "password",
    type: INPUT_FIELD_TYPES.PASSWORD,
    placeholder: "Password",
    inputFieldType: INPUT_FIELD_TYPES.PASSWORD,
  },
  {
    name: "gender",
    type: INPUT_FIELD_TYPES.RADIO,
    inputFieldType: INPUT_FIELD_TYPES.RADIO,
    options: ["Male", "Female"],
  },
  {
    name: "terms",
    type: INPUT_FIELD_TYPES.CHECKBOX,
    inputFieldType: INPUT_FIELD_TYPES.CHECKBOX,
    label: "I agree to terms and conditions",
  },
];
