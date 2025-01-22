import {useState} from 'react'
import Navbar from './Navbar'
import Lowerbar from './Lowerbar'
import Sidebar from './Sidebar'
import Landingpage from './Landingpage'

const Home = ({isAuthenticated,setisAuthenticated}) => {
    const [theme, setTheme] = useState(0)
    const [display, setdisplay] = useState(0)
    const [imageList, setimageList] = useState([]);
    const [nextCursor,setnextCursor]=useState(null);
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} display={display} setdisplay={setdisplay} isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated} setnextCursor={setnextCursor} nextCursor={nextCursor} imageList={imageList} setimageList={setimageList}/>
            <Lowerbar theme={theme} setTheme={setTheme} setnextCursor={setnextCursor} nextCursor={nextCursor} imageList={imageList} setimageList={setimageList}/>
            <Sidebar theme={theme} setTheme={setTheme} display={display}/>
            <Landingpage theme={theme} setTheme={setTheme} imageList={imageList} setimageList={setimageList} nextCursor={nextCursor} setnextCursor={setnextCursor} />
        </>
  )
}

export default Home