import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  let time = (new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' })).format(now);
  let date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[800px] rounded py-2 text-center text-base font-normal">
            Note : To Share the link of instant meeting just copy the url from above address bar and send it.
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
