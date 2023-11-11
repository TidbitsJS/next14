import Link from "next/link";
import { getAllCourses } from "punn";

export default async function Home() {
  const allCourses = await getAllCourses();

  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto'>
      <section className='space-y-7'>
        <h1 className='text-violet-700 text-5xl font-bold'>All Courses</h1>

        <div className='space-x-5'>
          <pre>{JSON.stringify(allCourses, null, 2)}</pre>

          <div className='text-blue-600 flex flex-col'>
            {allCourses.map((course: any) => (
              <Link
                href={`/course/${course.packageName}`}
                key={course.packageName}
              >
                {course.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
