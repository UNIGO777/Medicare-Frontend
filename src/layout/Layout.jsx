 
import Header from '../component/Header/Header'
import Routers from '../routes/Routers'
import Footer from '../component/Footer/Footer'

const Layout = () => {
  return (
      <>
          <Header />
          <main>
              <Routers/>
          </main>
          <Footer/>
      </>
  )
}

export default Layout