// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// Pages / Components
// Layout.js:
// import { Outlet, Link } from "react-router-dom";


// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

// Home.js:

// const Home = () => {
//   return <h1>Home</h1>;
// };

// export default Home;
// Blogs.js:

// const Blogs = () => {
//   return <h1>Blog Articles</h1>;
// };

// export default Blogs;
// Contact.js:

// const Contact = () => {
//   return <h1>Contact Me</h1>;
// };

// export default Contact;
// NoPage.js:

// const NoPage = () => {
//   return <h1>404</h1>;
// };

// export default NoPage;