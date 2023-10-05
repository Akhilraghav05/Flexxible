import { g, auth, config } from '@grafbase/sdk'


const User = g.model('user', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubBio: g.url().optional(),
  linkedInUrl: g.url().optional(),
  // A user can have  mulitple projects
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  // Here the relation: A project is associated with project
  createdBy: g.relation(() => User)
})


export default config({
  schema: g
})
