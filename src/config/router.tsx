import { BrowserRouter, Route, Routes } from "react-router-dom"
import Productlist from "../pages/Productlist"
import Productdetail from "../pages/Productdetail"

const router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productlist/>}></Route>
      <Route path='/productdetail/:id' element={<Productdetail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default router