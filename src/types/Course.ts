export type CourseStructure = {
  body: string
  body2: string
  title: string
  question: string
  answer: string
  objectives: string
}[]

export type Course = {
  hours: number
  fee: string
  id: number
  title: string
  description: string
  objectives: string
  states: { name: string }[]
}
