import './App.css';
import {Routes,Route, HashRouter, BrowserRouter} from "react-router-dom";
import Home from "./e_Commerce/Home";
import About from "./e_Commerce/About";
import Products from "./e_Commerce/Products";
import Contacts from "./e_Commerce/Contacts";
import SingleProduct from "./e_Commerce/SingleProduct";
import Cart from "./e_Commerce/Cart";
import ErrorPage from "./e_Commerce/ErrorPage";
import {GlobalStyle} from "./e_Commerce/GlobalStyle";
import {ThemeProvider} from "styled-components";
import Header from './e_Commerce/eComComponents/Header';
import Footer from './e_Commerce/eComComponents/Footer';
import { AppProvider } from './e_Commerce/context/ProductContext';
import { FilterContextProvider } from "./e_Commerce/context/FilterContext.jsx";
import { CartProvider } from "./e_Commerce/context/CartContext.jsx";


function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <AppProvider>
    <FilterContextProvider>
    <CartProvider>
    <ThemeProvider theme={theme}>

    <HashRouter> 
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </HashRouter>
    
    </ThemeProvider>
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
  );
}

export default App;
