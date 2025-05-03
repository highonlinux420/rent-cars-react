import HomePage from "./pages/HomePage";
import CarDetails, {carLoader} from "./pages/CarDetails";
import CarsPage from "./pages/CarsPage";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/cars" element={<CarsPage/>}/>
                <Route path="/car/:id" element={<CarDetails/>} loader={carLoader}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router}/>;
}

export default App;
