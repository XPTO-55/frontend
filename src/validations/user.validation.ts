import * as yup from 'yup'

export const authenticationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required()
})

export const registerSchema = yup.object().shape({
  name: yup.string().email().required(),
  cpf: yup.string().optional(),
  birthday: yup.date().optional(),
  addressLine: yup.string(),
  phone: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  confirm_password: yup.ref('password')
})
