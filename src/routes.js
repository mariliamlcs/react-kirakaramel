import {
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import Streamers from "./pages/Streamers";
import Pamy from "./pages/Streamers/Pamy";
import Jesse from "./pages/Streamers/Jesse";
import Hanako from "./pages/Streamers/Hanako";
import Gio from "./pages/Streamers/Gio";
import Ming from "./pages/Streamers/Ming";
import Sunny from "./pages/Streamers/Sunny";
import Ynasshi from "./pages/Streamers/Ynasshi";
  
export default function Routes(){
return(
<ReactRoutes>
  <Route path="/" element={<Home />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/streamers" element={<Streamers />} />
  <Route path="/Pamy" element={<Pamy />} />
  <Route path="/Jesse" element={<Jesse />} />
  <Route path="/Hanako" element={<Hanako />} />
  <Route path="/Gio" element={<Gio />} />
  <Route path="/Ming" element={<Ming />} />
  <Route path="/Sunny" element={<Sunny />} />
  <Route path="/Ynasshi" element={<Ynasshi />} />
  
</ReactRoutes>
)
}