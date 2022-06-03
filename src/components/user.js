import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Logout from "../pages/logout";
import Todaysposts from "../pages/todaysposts";
import Usernavigation from "./usernavigation";
import { Navigate } from "react-router-dom";

const User = (props) => {
    return(
        <div>
            <Usernavigation></Usernavigation>
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/user/home" />} />
                <Route exact path="/user/home" element={<Home></Home>}></Route>
                <Route exact path="/user/logout" element={<Logout Onsignout={props.Onsignout}></Logout>} />
                <Route exact path="/user/todaysposts" element={<Todaysposts></Todaysposts>} />
            </Routes>
        </div>
    );
}

export default User;