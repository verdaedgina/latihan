import { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <div className="header bg-slate-800 text-white p-4">
        <header>
          <h1>
            <Link to="/" className="text-3xl font-serif px-2 py-2 hover:text-gray-300">Wiskas</Link>
          </h1>
          <ul className="flex justify-end">
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Infomasi">Home</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/About">About</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Layanan">Services</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Produk">Produk</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Komentar">Contact</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}