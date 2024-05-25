import { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.users, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div className="text-center py-10">Loading...</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data List</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300">First Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Last Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{item.firstName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.lastName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
