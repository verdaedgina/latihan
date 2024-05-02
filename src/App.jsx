import { useState } from "react";

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
    <>
    <div className="bg-gray-200 overflow-hiden pb-11">
      <Header/>
      <Informasi/>
      <About/>
      <Layanan/>
      <Produk/>
      <Komentar/>
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="header bg-slate-800 text-white p-4">
      <h1>
        <a href="index2.html" className="text-3xl font-serif px-2 py-2 hover:text-gray-300">
          Wiskas
        </a>
      </h1>
      <ul className="flex justify-end">
        <li><a href="home.html" className="px-4 py-2 hover:text-gray-300">Home</a></li>
        <li><a href="about.html" className="px-4 py-2 hover:text-gray-300">About</a></li>
        <li><a href="produk.html" className="px-4 py-2 hover:text-gray-300">Produk</a></li>
        <li><a href="services.html" className="px-4 py-2 hover:text-gray-300">Services</a></li>
        <li><a href="kontak.html" className="px-4 py-2 hover:text-gray-300">Contact</a></li>
      </ul>
    </div>
  );
}

function Informasi(){
  return(
    <section className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(cat2.jpg)'}}>
    <div className="absolute inset-0 bg-white/75 lg:bg-gradient-to-r from-slate from-20%" style={{zIndex: 1}}></div>
  
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" style={{zIndex: 2}}>
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Let us find your
          <strong className="block font-extrabold text-rose-700">Pet Comfort. </strong>
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Get Started
          </a>
  
          <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:overflow-auto">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="cat1.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">About us</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
              eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
              quidem quam repellat.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Layanan() {
  return (
    <div className=" lg:overflow-x-scroll">
    <div className="px-4 py-3 grid grid-cols-1 gap-4  h-[400px] overflow-y-scroll lg:grid-cols-7 lg:gap-4 lg:w-[3500px] lg:h-auto">
      {layanan.map((item, index) => (
        <a key={index} href="#" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>
          
          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 sm:size-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
        
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">{item.name}</h2>
            </div>
        
            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">{item.name}</h3>
              <p className="mt-4 text-sm sm:text-base">
                {item.isi}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
}

function Produk() {
  const [totalHarga, setTotalHarga] = useState(0);

  const handleAddToCart = (event, productName, productPrice) => {
    event.preventDefault();
    alert('Produk ditambahkan ke keranjang adalah ' + productName + ' dengan harga ' + productPrice);
    
    const newTotalHarga = totalHarga + parseFloat(productPrice.replace('Rp.', '').replace(',', ''));
    setTotalHarga(newTotalHarga);
  };

  return (
    <div className="mt-4">
      <Total totalHarga={totalHarga}/>
      <div className="h-96 overflow-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-5">
          {produk.map((produk, index) => (
            <div key={index} className="group relative block overflow-hidden product m-3 my-0 mb-7">
              <img
                src="cat1.jpg"
                alt="Product Image"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h2 className="mt-4 text-lg font-medium text-gray-900">{produk.nama}</h2>
                <p className="mt-1.5 text-sm text-gray-700 price">{produk.harga}</p>
                <form className="mt-4">
                  <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105" onClick={(event) => handleAddToCart(event, produk.nama, produk.harga)}>
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function Total({ totalHarga }){
  return(
    <span className="relative flex justify-center my-4">
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
      ></div>
      <span className="relative z-10 bg-gray-200 px-2">Total: Rp.{totalHarga}.000</span>
    </span>
  )
}

function Komentar() {
  const muncul = (event, email, nama, pesan) => {
    event.preventDefault();
    alert(`Pesan dari: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const nama = event.target.nama.value;
    const pesan = event.target.pesan.value;
    muncul(event, email, nama, pesan);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="nama" className="sr-only">Name</label>
            <div className="relative">
              <input
                type="text"
                id="nama"
                name="nama"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="pesan" className="sr-only">Message</label>
            <div className="relative">
              <input
                type="text"
                id="pesan"
                name="pesan"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your message"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}