import Link from "next/link";
import {
  getAllCourses,
  getSingleCourse,
  getLectureContent,
  generateCurriculumStructure,
} from "punn";

export default async function Home() {
  const allCourses = await getAllCourses();
  const singleCourse = await getSingleCourse("next-pro");
  const courseCurriculum = await generateCurriculumStructure("next-pro");
  const lecture = await getLectureContent(
    "next-pro",
    "003_data-fetching",
    "003_isr"
  );

  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto'>
      <section className='space-y-7'>
        <h1 className='text-violet-700 text-5xl font-bold'>All Courses</h1>

        <div className='space-y-5'>
          {/* <div className='text-blue-600 flex flex-col'>
            {allCourses.map((course: any) => (
              <Link
                href={`/course/${course.packageName}`}
                key={course.packageName}
              >
                {course.title}
              </Link>
            ))}
          </div> */}

          <hr />

          <pre>{JSON.stringify(allCourses, null, 2)}</pre>
          <hr />

          <pre>{JSON.stringify(singleCourse, null, 2)}</pre>
          <hr />

          <pre>{JSON.stringify(courseCurriculum, null, 2)}</pre>
          <hr />

          <pre>{JSON.stringify(lecture, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}
