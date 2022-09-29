import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, Input, Button } from './Searchbar.style';

export default class Search extends Component {
    state = {
        searchName: '',
    };

    hendleChangeInputSearch = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    hendleSubmitSearchForm = (e) => {
        e.preventDefault();
        if (this.state.searchName.trim() === '') {
            toast.warn("Enter your request, please!");
        }
        this.props.onSubmit(this.state.searchName);
        this.setState({
            searchName: '',
        })
    }

    render() {
        return (
        <Header>
            <Form onSubmit={this.hendleSubmitSearchForm}>                
                <Input
                onChange={this.hendleChangeInputSearch}
                name="searchName"
                value={this.state.searchName}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
                <Button type="submit" >
                    <span>Search</span>
                </Button>
            </Form>
        </Header>)
    }
}