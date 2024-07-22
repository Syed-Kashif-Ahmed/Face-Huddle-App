import CallList from '@/components/CallList';
import '@/app/(root)/(home)/about-us/styles.css';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="flex size-full flex-col gap-2 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">About Us</h1>
      <div className="flex w-full flex-col gap-5 xl:max-w-[900px] text-center">
      <p style={{fontSize:"16px"}}>
              Face Huddle{' '}
              <Image
                src="/icons/logos/hf3.png"
                width={40}
                height={40}
                alt="Face Huddle Logo"
                className="up2"
                style={{ display: 'inline' }}
              />{'    '}
              is a Video Conferencing App or Site build with various and latest
              techologies. <br></br>
              All credits to the open source Next.Js, Node.Js, Clerk for
              authentication and Stream Api for conference.
              <br></br>
              To turn our App live we have used the Vercel for deploying, the
              Vercel is also the creator of Next.Js.
            </p>
        <div className="container hovering">
          <ul>
            <Quote/>
            <h3 className='up2'> " Success and Failure are both part of our life, and both are not Permanent. "</h3>        
            <div className='up'>
              <br></br>
              <li>
                <b>~ ShahRukh Khan</b>
                <img src="/images/srk.png" width="500" height="500" />
              </li>
            </div>

          <center>
            <div>
              <li>
                <span>
                  Developer : {'    '}
                  <b>Mohammed Faiz</b>
                </span>
                  <img src="/images/faiz1.JPG" width="300" height="300" />
              </li>
              <br></br>
              <br></br>
              <li>
                <span>
                 Co-Developer : {'    '}
                  <b>S.K.A</b>
                </span>
              </li>
            </div>
          </center>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
