import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
 import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
 import { BrowserRouter, Routes, Route } from "react-router-dom";


 function App() {
   return (

   <>
     <h1>Prueba</h1>
     <BrowserRouter>
       <NavBar />
       <Routes>
         <Route
           path="/"
           element={<ItemListContainer greeting={"Bienvenidos"} />}
         />
         <Route
           path="/category/:categoryId"
           element={
             <ItemListContainer greeting={"Listado de productos FILTRADOS"} />
           }
         />
         <Route path="/detail/:productId" element={<ItemDetailContainer />} />
       </Routes>
     </BrowserRouter>
      
     </>
   );
          }
 export default App;

// import NavBar from "./Components/NavBar/NavBar.jsx";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
// import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route
//             path="/"
//             element={<ItemListContainer greeting={"Bienvenidos al ItemListConainer"} />}
//           />
//           <Route
//             path="/category/:categoryId"
//             element={
//               <ItemListContainer greeting={"Listado de productos FILTRADOS"} />
//             }
//           />
//           <Route path="/detail/:productId" element={<ItemDetailContainer />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;