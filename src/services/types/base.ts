export interface IUserBase {
  name: string
  cpf: string
  rg: string
  about: string
  birthday: string
  landline: string
  phone: string
  email: string
  profileUrl: string
  address?: IAddress
}

export interface IAddress {
  street: string
  district: string
  number: string
  complement: string
  zipcode: string
  city: string
  uf: string
  coordenates: {
    x: number
    y: number
  }
}
