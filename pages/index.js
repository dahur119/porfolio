import Head from 'next/head'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
   
   
    </div>
  )
}
