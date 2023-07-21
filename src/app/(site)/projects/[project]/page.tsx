import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react" 
import Image from "next/image"

type Props = {
  params: { project: string }
}

const ProjectPage = async ({params}: Props) => {
  const slug = params.project
  const project = await getProject(slug)

  return (
    <div>
      <header
        className="flex items-center justify-between"
      >
        <h1
          className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          {project.name}
        </h1>
        <a 
          href={project.url} 
          target='_blank' 
          rel='noopener noreferrer' 
          title='New project'
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-orange-100 transition"
        >
          View Project
        </a>
      </header>
      <div
        className="text-lg text-gray-200 mt-5"
      >
        <PortableText value={project.content} />
      </div>
      {
        project.image && (
          <Image 
            src={project.image}
            alt={project.name}
            width={250}
            height={300}
          />
        )
      }
    </div>
  )
}

export default ProjectPage