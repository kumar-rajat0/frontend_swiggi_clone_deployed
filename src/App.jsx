import { Outlet } from "react-router-dom"
import ApiCalling from "./components/ApiCalling"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"


function App(){
  return(
    <Provider store={appStore}>
       <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
    </Provider>
   
  )
}
export default App