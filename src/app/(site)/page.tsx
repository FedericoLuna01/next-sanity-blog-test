import { getProjects } from "@/sanity/sanity-utils"
import { Project } from "@/types/Project"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      <h1 
        className="text-7xl font-extrabold">Hello I&apos;m 
        <span 
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {' '}Fede
        </span>
        !
      </h1>
      <p
        className="mt-3 text-xl text-gray-300"
      >
        I&apos;m a full-stack developer, I love to build things and learn new technologies.
      </p>
      <h2
        className="mt-24 font-bold text-gray-400 text-3xl"
      >
        My projects
      </h2>
      <div
        className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {
          projects.map((project) => (
            <Link
              key={project._id}
              className="border-2 border-gray-500 rounded-lg py-1 flex flex-col items-center hover:scale-105 hover:border-orange-500 transition"
              href={`projects/${project.slug}`}
            >
              {
                project.image && (
                  <Image 
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={300}
                    className="object-cover rounded-lg border border-gray-500"
                  />
                )
              }
              <div
                className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
              >
                {project.name}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
