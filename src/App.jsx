import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./komponen/Header.jsx";
import Infomasi from "./komponen/Informasi.jsx";
import About from "./komponen/About.jsx";
import Layanan from "./komponen/Layanan.jsx";
import Produk from "./komponen/Produk.jsx";
import Komentar from "./komponen/Komentar.jsx";
import Login from './komponen/Login.jsx';
import Footer from './komponen/Footer.jsx'
import Table from './komponen/Table.jsx'
import ProtectedRoute from './komponen/ProtectedRoute.jsx';

const layanan = [
  { name: 'Layanan pertama', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan kedua', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan ketiga', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan keempat', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan kelima', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan keenam', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
  { name: 'Layanan ketuju', isi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.' },
];

const produk = [
  { nama: 'Produk pertama', harga: 'Rp.10.000' },
  { nama: 'Produk kedua', harga: 'Rp.10.000' },
  { nama: 'Produk ketiga', harga: 'Rp.10.000' },
  { nama: 'Produk keempat', harga: 'Rp.10.000' },
  { nama: 'Produk kelima', harga: 'Rp.10.000' },
  { nama: 'Produk keenam', harga: 'Rp.10.000' },
  { nama: 'Produk ketuju', harga: 'Rp.10.000' },
];

export default function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Header />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Infomasi" element={<ProtectedRoute element={<Infomasi />} />} />
          <Route path="/About" element={<ProtectedRoute element={<About />} />} />
          <Route path="/Layanan" element={<ProtectedRoute element={<Layanan layanan={layanan} />} />} />
          <Route path="/Produk" element={<ProtectedRoute element={<Produk produk={produk} />} />} />
          <Route path="/Komentar" element={<ProtectedRoute element={<Komentar />} />} />
          <Route path="/Table" element={<ProtectedRoute element={<Table />} />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
