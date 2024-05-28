import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  handleLoginClick = (e) => {
    e.preventDefault();
    const confirmLogin = window.confirm("Apakah Anda yakin ingin keluar?");
    if (confirmLogin) {
      window.location.href = '/Login';
    }
  };

  render() {
    return (
      <div className="header bg-slate-800 text-white p-4">
        <header>
          <h1>
            <p className="text-3xl font-serif px-2 py-2">Wiskas</p>
          </h1>
          <ul className="flex justify-end">
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Infomasi">Home</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/About">About</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Layanan">Services</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Produk">Produk</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Komentar">Contact</Link></li>
            <li><Link className="px-4 py-2 hover:text-gray-300" to="/Table">User</Link></li>
            <li>
              <a href="/Login" className="px-4 py-2 hover:text-gray-300" onClick={this.handleLoginClick}>
                Logout
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
