import * as yup from 'yup'

export const authenticationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required()
})

export const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  rg: yup.string().optional(),
  cpf: yup.string().required(),
  birthday: yup.date().optional(),
  addressLine: yup.string(),
  phone: yup.string(),
  password: yup.string().min(8).max(20).required(),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})
