export type CourseType = {
  id: string
  hours: string
  fee: string
  description: string
  title: string
}

export type CoursesPageProps = {
  courses: CourseType[]
}
