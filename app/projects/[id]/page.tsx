const projectsData: Record<
  string,
  { title: string; description: string; details: string }
> = {
  "1": {
    title: "Project One",
    description: "A description of your first project goes here.",
    details:
      "This is a detailed description of Project One. Add more information about what this project does, the technologies used, and the challenges overcome.",
  },
  "2": {
    title: "Project Two",
    description: "A description of your second project goes here.",
    details:
      "This is a detailed description of Project Two. Explain the purpose, implementation, and outcomes of this project.",
  },
  "3": {
    title: "Project Three",
    description: "A description of your third project goes here.",
    details:
      "This is a detailed description of Project Three. Share insights about the development process and results achieved.",
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({ id }));
}

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const id = params.id;
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Project Not Found
          </h1>
          <a
            className="mt-8 flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/projects"
          >
            Back to Projects
          </a>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="w-full my-12">
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <p className="text-zinc-700 dark:text-zinc-300 leading-8">
              {project.details}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium w-full sm:w-auto">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/projects"
          >
            Back to Projects
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
