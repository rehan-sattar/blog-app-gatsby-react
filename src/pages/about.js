import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <blockquote className={aboutStyles.quote}>
        "If you fall behind, run faster. never give up, never surrender, and
        rise up against the odds."
      </blockquote>

      <article className={aboutStyles.description}>
        Hi Devs 👨‍💻 , I'm <strong>Rehan Sattar</strong>, A passionate * Full
        Stack Software Developer 🚀 * having an experience of 1 year of building
        Web Applications with JavaScript and working with startups and
        companies. I have built a lot of interesting stuff throughout my career
        that includes E Commerce web apps, Health care solutions, Crime rates,
        Driving services apps and a lot of Management Systems. I have worked on
        both teams and well as individually and delivered the best with 100% of
        client satisfaction. working in strict deadlines and Pressure without
        loosing confidence is my key point.
        <br />
        <br />
        <h5>What I know? 👨‍💻</h5>
        <p> ⚡ HTML5 / CSS3 / Flex Layout / Responsive Design </p>
        <p>
          ⚡ Front end CSS Libraries and Frameworks / Bootstrap4+ / Bulma CSS /
          Materialize
        </p>
        <p> ⚡ JavaScript ES2015 - ESNext</p>
        <p> ⚡ Reactjs / Redux / React Router</p>
        <p>
          ⚡ Material UI Design / ReactStrap / Formik for Building React Forms /
          Ant Design.
        </p>
        <p> ⚡ Strong Knowledge of MVC pattern.</p>
        <p> ⚡ Proficient in Version Controlling using Git.</p>
        <p> ⚡ NodeJS / ExpressJS </p>
        <p> ⚡ MongoDB and SQL</p>
        <p> ⚡ Excellent knowledge of REST Api Architectures. </p>
        <p> ⚡ Hands On Experience with GraphQL. </p>
        <p> ⚡ Authentication using JWT and PassportJS</p>
        <p>
          ⚡ Firebase 🔥 / Authentication / Realtime Database / Cloud FireStore
          / Cloud Hosting
        </p>
        <p> ⚡ Test Driven Development Using JEST / Enzyme / Mocha and Chai.</p>
        <p className={aboutStyles.readyText}>
          * Always ready for new tool to fit in the belt! *
        </p>
        <h5>What I can do for you ? 🤟 </h5>
        <p>
          ⚡ Can develop highly interactive Front end / User Interfaces for your
          web applications.
        </p>
        <p>
          ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks .
        </p>
        <p>
          ⚡ Can build robust and maintainable Back End Servers for web
          applications.
        </p>
        <p> ⚡ Can solve your problems via Bug Fixing 🐛</p>
        <p> ⚡ Feature Upgrade 💡</p>
        <p> ⚡ Integration of Third party services.</p>
        <p> ⚡ Documentation and design. 📓 </p>
        <p> ⚡ Deployment. 🚀</p>
        <p> ⚡ Testing 🔧</p>
        <p>
          Apart from all these tech stuff, I'm not only a developer but a Tech
          Speaker and Community enthusiast. I deliver talks on latest stuff and
          also teach it on YouTube. Always ready for new challenges and a new
          learning and working opportunities. Never give up on doing the new
          things. Self oriented with ability to manage the time.
        </p>
        <blockquote>Happy Coding :)</blockquote>
      </article>
      <p>
        - <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
