import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Project One",
    description: "Description.",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Description.",
  },
  {
    id: "3",
    title: "Project Three",
    description: "Description.",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Projects
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Check out some of my recent work below.
          </p>
        </div>

        <div className="w-full grid gap-6 my-12">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="p-6 border border-solid border-black/[.08] rounded-lg hover:bg-black/[.04] transition-colors dark:border-white/[.145] dark:hover:bg-[#1a1a1a] cursor-pointer">
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                  {project.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  {project.description}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400 mt-4 inline-block">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 text-base font-medium">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
