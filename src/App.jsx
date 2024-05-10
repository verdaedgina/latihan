import Header from "./komponen/Header.jsx";
import Informasi from "./komponen/Informasi.jsx";
import About from "./komponen/About.jsx";
import Layanan from "./komponen/Layanan.jsx";
import Produk from "./komponen/Produk.jsx";
import Komentar from "./komponen/Komentar.jsx";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const layanan=[
  {
    name: 'Layanan pertama',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan kedua',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan ketiga',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan keempat',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan kelima',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan keenam',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
  {
    name: 'Layanan ketuju',
    isi:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam recusandae voluptates non excepturi tempore libero, maxime assumenda hic optio.',
  },
];

const produk=[
  {
    nama: 'Produk pertama',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk kedua',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk ketiga',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk keempat',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk kelima',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk keenam',
    harga:'Rp.10.000',
  },
  {
    nama: 'Produk ketuju',
    harga:'Rp.10.000',
  },
];

export default function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/Infomasi" element={<Informasi />} />
            <Route path="/About" element={<About />} />
            <Route path="/Layanan" element={<Layanan layanan={layanan} />} />
            <Route path="/Produk" element={<Produk produk={produk} />} />
            <Route path="/Komentar" element={<Komentar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}