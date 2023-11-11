import Link from "next/link";
import { getSingleCourse, generateCurriculumStructure } from "punn";

export default async function Home({ params }: any) {
  const id = params.id;
  const courseInfo = await getSingleCourse(id);
  const courseCurriculum = await generateCurriculumStructure(
    courseInfo.packageName
  );

  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto space-y-16'>
      <section className='space-y-7'>
        <h1 className='text-violet-700 text-5xl font-bold'>
          {courseInfo.title}
        </h1>

        <ul>
          {courseCurriculum.map((module: any) => (
            <div key={module.slug} className='my-4 space-y-1 first:mt-4'>
              <li>{module.meta.title}:</li>

              <div className='flex flex-col text-blue-600 ml-2'>
                {module.lectures.map((lecture: any) => (
                  <Link
                    href={`/course/${courseInfo.packageName}/learn/${module.slug}/${lecture.slug}`}
                    key={lecture.slug}
                  >
                    {lecture.meta.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </ul>

        <hr />

        <div>
          <pre>{JSON.stringify(courseInfo, null, 2)}</pre>
        </div>

        <hr />

        <div>
          <pre>{JSON.stringify(courseCurriculum, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}
