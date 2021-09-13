export type CourseStructure = {
  body: string
  body2: string
  title: string
  question: string
  answer: string
}[]

export type Course = {
  hours: number
  fee: string
  description: string
  objectives: string
  states: { name: string }[]
}
