import Box from '@mui/material/Box'
import Header from '../components/Home/Header'
import Footer from '../components/Footer/Footer'
import HomeSection from '../components/HomeSection/HomeSection'
const Home = () => {
  return (
    <Box maxWidth={'1580px'} margin={'auto'}>
       <Header/>
       <HomeSection/>
       <Footer/>
    </Box>
  )
}

export default Home