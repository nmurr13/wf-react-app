import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { indexLoader, showLoader } from "./loaders.jsx";
import App from "./App"
import Concerts from "./pages/Concerts"
import Home from "./pages/Index.jsx"
import Records from "./pages/Records.jsx"
import Show from "./pages/Show"
import { createAction,updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='' element={<Home/>} />
            <Route path='concerts/' element={<Concerts/>} loader={indexLoader}/>
            <Route path='concerts/:id' element={<Show/>} loader={showLoader}/>
            <Route path="concerts/create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
            <Route path='/records' element={<Records/>} />
            <Route/>
        </Route>
    </>
))

export default router