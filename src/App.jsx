import Header from "./components/header"
import BannerHeader from './components/banner_header'
import Slider from "./components/slider"
import Newsletter from "./components/Newsletter"
import Footer from "./components/footer"
function App(){
  return(
    <main className="w-full min-h-screen">
      <Header />
      <section className="w-[85%] mx-auto">
          <BannerHeader />
          <Slider />
          <Newsletter />
      </section>
      <Footer />
    </main>
  )
}

export default App