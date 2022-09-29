import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Search from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    searchName: '',
  }


handleSubmitSearchForm = searchName => {
  this.setState({ searchName });
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.handleSubmitSearchForm} />
        <ImageGallery searchName={this.state.searchName} />
        
        <ToastContainer autoClose={4000} />
      </div>
  );
    }
    
};

export default App;