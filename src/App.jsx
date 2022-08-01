import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import './styles/App.css'

function App() {

  return (
    <div className='2xl:flex 2xl:flex-col 2xl:items-center'>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
