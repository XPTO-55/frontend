export default interface PrefessionalCardProps {
  id: number
  name: string
  graduacao?: string
  identificacao?: string
  ratings: [{
    rating: number
    comment: string
    profissional: string
  }]
  especialidade?: string
}
