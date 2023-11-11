import { getLectureContent } from "punn";

export default async function Home({ params }: any) {
  const id = params.id;
  const moduleId = params.moduleId;
  const lectureId = params.lectureId;

  const content = await getLectureContent(id, moduleId, lectureId);

  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto space-y-16'>
      <section className='space-y-7'>
        <p>{content}</p>
      </section>
    </main>
  );
}
