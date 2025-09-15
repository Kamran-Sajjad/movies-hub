import { z } from "zod";

export const INPUT_FIELD_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
  CHECKBOX: "checkbox",
  RADIO: "radio",
};

export const loginFieldsData = {
  inputFields: [
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
  ],
  loginSchema: z.object({
    email: z
      .string()
      .min(1, "Please enter your email.")
      .email("Please enter a valid email."),
    password: z.string().min(1, "Please enter your password."),
  }),
};

export const signupFieldsData = {
  inputFields: [
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
  ],

  signupSchema: z.object({
    name: z.string().min(1, "Please enter your name."),
    email: z
      .string()
      .min(1, "Please enter your email.")
      .email("Please enter a valid email."),
    password: z.string().min(1, "Please enter your password."),

    gender: z
      .string()
      .nullable()
      .refine((val) => val === "Male" || val === "Female", {
        message: "Please select a gender.",
      }),

    terms: z
      .boolean()
      .refine((val) => val === true, { message: "You must accept terms." }),
  }),
};
