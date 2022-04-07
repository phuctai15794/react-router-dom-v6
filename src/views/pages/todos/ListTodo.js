import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import HtmlRaw from '../../../utils/HtmlRaw';
import TodosStyles from '../../../styles/Todos.module.scss';
import { MetaData } from '../../../utils/MetaData';
import CreateTodo from "./CreateTodo";

class Todos extends React.Component {
    state = {
        editTodo: {}
    }

    handleOnChangeEditTodo = (event) => {
        const newTodo = { ...this.state.editTodo };
        newTodo.title = event.target.value

        this.setState({
            editTodo: newTodo
        })
    }

    handleOnKeyPressEditTodo = (event) => {
        if (event.which === 13) {
            this.handleUpdateEditTodo();
        }
    }

    handleOnClickUpdateEditTodo = () => {
        this.handleUpdateEditTodo();
    }

    handleUpdateEditTodo = () => {
        const todo = { ...this.state.editTodo };
        const isEmpty = Object.keys(todo).length === 0;

        if (!isEmpty) {
            this.props.updateTodoRedux(todo);

            this.setState({
                editTodo: {}
            });

            toast.success(<HtmlRaw>{`Updated <strong>${todo.title}</strong> successfully`}</HtmlRaw>);
        } else {
            toast.error('Data is invalid');
        }
    }

    handleOnClickAdd = (todo) => {
        const isEmpty = Object.keys(todo).length === 0;

        if (!isEmpty) {
            const isEmpty = Object.keys(this.props.dataRedux.list).length === 0;
            const existTodo = !isEmpty && this.props.dataRedux.list.some(item => item.title === todo.title);

            if (!existTodo) {
                this.props.addTodoRedux(todo);
                toast.success(<HtmlRaw>{`Added <strong>${todo.title}</strong> successfully`}</HtmlRaw>);
            } else {
                toast.error('Todo was existed');
            }
        }
    }

    handleOnClickEdit = (todo) => {
        this.setState({
            editTodo: todo,
        })
    }

    handleOnClickCancelEdit = () => {
        this.setState({
            editTodo: {},
        })
    }

    handleOnClickDelete = (todo) => {
        const title = todo.title;

        confirmAlert({
            title: 'Confirm to delete',
            childrenElement: () => {
                return (
                    <>
                        <HtmlRaw>{`Are you sure to do this with <strong>${title}</strong>.`}</HtmlRaw>
                    </>
                );
            },
            buttons: [
                {
                    label: 'No',
                    className: 'btn btn-sm btn-secondary',
                },
                {
                    label: 'Yes',
                    className: 'btn btn-sm btn-danger',
                    onClick: () => {
                        this.props.deleteTodoRedux(todo);

                        toast.success(<HtmlRaw>{`Deleted <strong>${title}</strong> successfully`}</HtmlRaw>);
                    }
                }
            ]
        });
    }

    render() {
        const { editTodo } = this.state;
        const todos = this.props.dataRedux.list;
        const isEmptyEdit = Object.keys(editTodo).length === 0;

        return (
            <>
                <MetaData
                    title={'Todos'}
                    keywords={'Inc,and Sons,LLC,Group'}
                    description={'Voluptatum nihil occaecati est numquam. Molestiae dolorum architecto accusamus veritatis. Ipsa est magnam dolorem quasi repellat repellat nam eveniet. Harum tempora quidem facere omnis consequatur est cum. Et ea eligendi mollitia laborum quis et autem et repellat.'}
                    image={'http://placeimg.com/640/480/business'}
                />
                <h2 className="title-main">Todos List</h2>
                <div className="content-main">
                    <CreateTodo
                        handleAdd={this.handleOnClickAdd}
                    />
                    <div className={clsx(TodosStyles.listTodo, 'box-main')}>
                        {
                            todos.length > 0
                                ?
                                <ul>
                                    {
                                        todos.map((todo, index) => {
                                            return (
                                                <li className={clsx(TodosStyles.listTodoItem, 'transition')} key={todo.id}>
                                                    <div className={TodosStyles.listTodoTitle}>
                                                        {
                                                            isEmptyEdit === true
                                                                ?
                                                                <span className={TodosStyles.listTodoText}>{index + 1}. {todo.title}</span>
                                                                :
                                                                editTodo.id === todo.id
                                                                    ?
                                                                    <>
                                                                        <span
                                                                            className={TodosStyles.listTodoTextWithEdit}>
                                                                            {index + 1}.
                                                                            <input
                                                                                type="text"
                                                                                className="form-control ms-2"
                                                                                value={editTodo.title}
                                                                                onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                                                onKeyPress={(event) => this.handleOnKeyPressEditTodo(event)}
                                                                            />
                                                                        </span>
                                                                    </>
                                                                    :
                                                                    <span className={TodosStyles.listTodoText}>{index + 1}. {todo.title}</span>
                                                        }
                                                    </div>
                                                    {
                                                        editTodo.id === todo.id
                                                            ?
                                                            <>
                                                                <span
                                                                    className={clsx(TodosStyles.listTodoBtnAction, 'text-info me-2')}
                                                                    title="Save"
                                                                    onClick={() => this.handleOnClickUpdateEditTodo()}
                                                                ><i className="far fa-save"></i></span>
                                                                <span
                                                                    className={clsx(TodosStyles.listTodoBtnAction, 'text-danger me-2')}
                                                                    title="Cancel"
                                                                    onClick={() => this.handleOnClickCancelEdit()}
                                                                ><i className="far fa-times-circle"></i></span>
                                                            </>
                                                            :
                                                            <>
                                                                <span
                                                                    className={clsx(TodosStyles.listTodoBtnAction, 'text-info me-2')}
                                                                    title="Edit"
                                                                    onClick={() => this.handleOnClickEdit(todo)}
                                                                ><i className="far fa-edit"></i></span>
                                                                <span
                                                                    className={clsx(TodosStyles.listTodoBtnAction, 'text-danger me-2')}
                                                                    title="Delete"
                                                                    onClick={() => this.handleOnClickDelete(todo)}
                                                                ><i className="far fa-trash-alt"></i></span>
                                                            </>
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                :
                                <div className="alert alert-info">No todos found</div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoRedux: (todoNew) => dispatch({ type: 'ADD-TODO', payload: todoNew }),
        updateTodoRedux: (todoUpdate) => dispatch({ type: 'UPDATE-TODO', payload: todoUpdate }),
        deleteTodoRedux: (todoDelete) => dispatch({ type: 'DELETE-TODO', payload: todoDelete })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);