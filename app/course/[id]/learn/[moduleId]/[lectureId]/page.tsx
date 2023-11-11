import { getLectureContent } from "punn";

export default async function Home({ params }: any) {
  const id = params.id;
  const moduleId = params.moduleId;
  const lectureId = params.lectureId;

  const lectureInfo = await getLectureContent(id, moduleId, lectureId);

  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto space-y-16'>
      <section className='space-y-7'>
        <h1 className='text-violet-700 text-5xl font-bold'>
          {lectureInfo.title}
        </h1>

        <p>{lectureInfo.content}</p>
      </section>
    </main>
  );
}
