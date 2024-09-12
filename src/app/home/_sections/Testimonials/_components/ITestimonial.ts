export interface ITestimonial {
  name: string
  title: string
  image: string
  quote: string
  company?: {
    link?: {
      url: string
      name: string
    }
    name: string
    image: string
    logo: string
  }
}
