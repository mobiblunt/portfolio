import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Head>
    <title>Chima Ejiofor - Portfolio</title>
    <meta name="description" content="Portfolio for Chima Ejiofor - Software Developer" />


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    </Head>
    <Header />
    {children}
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class=" flex main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chima-ejiofor">
                <img
                  class="main-footer__icon"
                  src="./assets/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/mobiblunt">
                <img
                  class="main-footer__icon"
                  src="./assets/img/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/chim0bi">
                <img
                  class="main-footer__icon"
                  src="./assets/img/twitter-ico.png"
                  alt="icon"
                />
              </a>
              
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/img/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Chima Ejiofor</h4>
            <p class="main-footer__short-desc">
              Full Stack Developer
            </p>
          </div>
        </div>

        
      </div>
    </footer>

        
    </>
  )
}

export default Layout