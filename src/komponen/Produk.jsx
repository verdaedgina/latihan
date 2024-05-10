import { Component } from "react";
import Total from "./Total";

export default class Produk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalHarga: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(event, productName, productPrice) {
    event.preventDefault();
    alert('Produk ditambahkan ke keranjang adalah ' + productName + ' dengan harga ' + productPrice);

    const { totalHarga } = this.state;
    const newTotalHarga = totalHarga + parseFloat(productPrice.replace('Rp.', '').replace(',', ''));
    this.setState({ totalHarga: newTotalHarga });
  }

  render() {
    const { produk } = this.props;
    const { totalHarga } = this.state;

    return (
      <div className="mt-4  pb-28">
        <Total totalHarga={totalHarga} />
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
                    <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105" onClick={(event) => this.handleAddToCart(event, produk.nama, produk.harga)}>
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
}
