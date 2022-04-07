import React from 'react';
import { toast } from 'react-toastify';

class CreateTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnKeyPressTitle = (event) => {
        if (event.which === 13) {
            this.handleSave();
        }
    }

    handleOnClickAdd = () => {
        this.handleSave();
    }

    handleSave = () => {
        if (!this.state.title) {
            toast.error('Please enter your todo');
            return;
        }

        const { title } = this.state;
        const { handleAdd } = this.props;

        handleAdd({
            id: Math.floor(Math.random() * 1000),
            title: title
        });

        this.setState({ title: '' });
    }

    render() {
        return (
            <>
                <div className="d-flex align-items-center justify-content-start w-75 mb-3 mx-auto">
                    <input
                        type="text"
                        className="form-control me-3"
                        placeholder="Enter your todo..."
                        onChange={(event) => this.handleOnChangeTitle(event)}
                        onKeyPress={(event) => this.handleOnKeyPressTitle(event)}
                        value={this.state.title}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => this.handleOnClickAdd()}
                    >Add</button>
                </div>
            </>
        )
    }
}

export default CreateTodo;