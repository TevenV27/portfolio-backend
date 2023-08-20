import z from 'zod'

const projectSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    technologies: z.array(z.string().nonempty()),
    image: z.string().url(),
})
export default projectSchema
