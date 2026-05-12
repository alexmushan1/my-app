import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const id = params.id;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Project {id}: this is a blank project page template
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Use this page as a template for a project detail view.
          </p>
        </div>

        <div className="w-full my-12">
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <p className="text-zinc-700 dark:text-zinc-300 leading-8">
              this is a blank project page template
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium w-full sm:w-auto">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/projects"
          >
            Back to Projects
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
