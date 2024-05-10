import  { Component } from 'react';

export default class Komentar extends Component{
  render(){
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
}