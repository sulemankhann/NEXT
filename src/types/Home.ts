export type SchoolType = {
  id: string
  excerpt: string
  featureImage: {
    url: string
    alternativeText: string
  }
  name: string
}

export type HomePageProps = {
  schools: SchoolType[]
}
