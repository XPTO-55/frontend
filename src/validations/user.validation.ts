import * as yup from 'yup'

export const authenticationSchema = yup.object().shape({
  email: yup.string().email().required(''),
  password: yup.string().required('Email ou senha estão incorretos')
})

export const registerPatientSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório'),
  rg: yup.string().optional(),
  cpf: yup.string().optional(),
  birthday: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).default(undefined),
  landline: yup.string().optional(),
  phone: yup.string().optional(),
  password: yup.string().required('A senha deve conter pelo menos 8 caracteres').min(8).max(20),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem corresponder')
})

export const updatePatientSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório'),
  rg: yup.string().optional(),
  cpf: yup.string().optional(),
  birthday: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).default(undefined),
  landline: yup.string().optional(),
  phone: yup.string().optional(),
  about: yup.string().optional(),
  address: yup.object().shape({
    street: yup.string(),
    district: yup.string(),
    number: yup.number().nullable().moreThan(0).transform((cur, ori) => ori ? Number(ori) : null),
    complement: yup.string(),
    zipcode: yup.string(),
    city: yup.string(),
    uf: yup.string()
  }).default(undefined)
})

export const registerProfessionalSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório'),
  rg: yup.string().optional(),
  cpf: yup.string().optional(),
  birthday: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).default(undefined),
  landline: yup.string().optional(),
  phone: yup.string().optional(),
  password: yup.string().required('A senha deve conter pelo menos 8 caracteres').min(8).max(20),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

export const updateProfessionalSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório'),
  rg: yup.string().optional(),
  cpf: yup.string().optional(),
  birthday: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr).default(undefined),
  landline: yup.string().optional(),
  phone: yup.string().optional(),
  about: yup.string().optional(),
  especialidade: yup.string().optional(),
  graduacao: yup.string().optional(),
  identificacao: yup.string().default('none'),
  address: yup.object().shape({
    street: yup.string(),
    district: yup.string(),
    number: yup.number().nullable().moreThan(0).transform((cur, ori) => ori ? Number(ori) : null),
    complement: yup.string(),
    zipcode: yup.string(),
    city: yup.string(),
    uf: yup.string()
  }).default(undefined)
})
