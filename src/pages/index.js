import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    >
      <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, My name is Chima Ejiofor</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            I am a passionate full stack developer based in Lagos, Nigeria. My specialities are <strong>Laravel PHP</strong>, <strong>Javascript</strong>, <strong>Typescript</strong>,  <strong>React JS</strong>, <strong>InertiaJs</strong>, <strong>ExpressJs</strong>, <strong>GraphQl</strong>, <strong>NodeJs</strong>, <strong>NextJs</strong>, and <strong>Tailwind CSS</strong>, and I love building apps that are delightful to use.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">See my projects</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="https://www.linkedin.com/in/chima-ejiofor" class="home-hero__social-icon-link">
            <img
              src="./assets/img/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/mobiblunt" class="home-hero__social-icon-link">
            <img
              src="./assets/img/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://x.com/chim0bi" class="home-hero__social-icon-link">
            <img
              src="./assets/img/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        
        
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    
    
        <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            All my projects include links to the code and live version. Click the button to learn more about each one.
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/quiz.jpg"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Live Crypto Convertor Application</h3>
              <p class="projects__row-content-desc">
                This app gets the latest price of a crypto currency and can make margin conversions. Its is implemented using ReactJs and Tailwind on the frontend and nodeJs and GraphQl on the backend.
              </p>
              <a
                href="/crypto"
                class="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/dashboard.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Car Dealership SPA</h3>
              <p class="projects__row-content-desc">
                This implements a full CRUD application using NextJs. Firestore is utilized on the backend for storage.
              </p>
              <a
                href="/dealership"
                class="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/password.jpg"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">BedSpace</h3>
              <p class="projects__row-content-desc">
                A web application for temporary lodging. Users can authenticate, view dashboard, book listings and also post listings as hosts. it is implemented using Laravel and Mysql on the backend and InertiaJs, ReactJs and Tailwind CSS on the client side.
              </p>
              <a
                href="/bedspace"
                class="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            <p>Seasoned software engineer with 8+ years of experience designing and developing complex software solutions, guiding and 
              mentoring younger developers. With keen interest in Distributed System, System Designs and Scalability. My specialities include TypeScript, React JS, NextJs, Tailwind CSS, and Styled Components.
            </p>
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                My background is in technology. I have a bachelor of technology degree in Geology & Mining from the University of Port Harcourt. When I'm not coding, I like to read and exercise.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">ReactJs</div>
              <div class="skills__skill">TypeScript</div>
              <div class="skills__skill">Git</div>
              <div class="skills__skill">Figma</div>
              <div class="skills__skill">Tailwind CSS</div>
              <div class="skills__skill">Laravel PHP</div>
              <div class="skills__skill">InertiaJs</div>
              <div class="skills__skill">ExpressJs</div>
              <div class="skills__skill">GraphQl</div>
              <div class="skills__skill">NodeJs</div>
              <div class="skills__skill">NextJs</div>
              <div class="skills__skill">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    

    
    
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at chimobi.ejiofor@gmail.com or call me directly at +234 (913)-030-1443
          </span>
        </h2>
      </div>
    </section>
    </main>
  );
}
