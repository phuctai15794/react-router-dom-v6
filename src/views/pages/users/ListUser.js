import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import WithRouter from '../../../utils/WithRouter';
import { MetaData } from '../../../utils/MetaData';
import UsersStyles from '../../../styles/Users.module.scss';

class ListUser extends React.Component {
    state = {
        loading: true,
        users: []
    }

    componentDidMount() {
        const { urlAPI } = this.props.dataRedux;

        axios.get(`${urlAPI}/api/users`)
            .then(res => {
                this.setState({
                    loading: false,
                    users: res.data.data
                })
            })
            .catch(error => {
                toast.error(`${error}`);
            });
    }

    handleOnClickViewDetail = (user) => {
        const { router } = this.props;
        router.navigate(`detail/${user.id}`);
    }

    render() {
        const { loading, users } = this.state;

        return (
            <>
                <MetaData
                    title={'Users list'}
                    keywords={'Inc,and Sons,LLC,Group'}
                    description={'Voluptatum nihil occaecati est numquam. Molestiae dolorum architecto accusamus veritatis. Ipsa est magnam dolorem quasi repellat repellat nam eveniet. Harum tempora quidem facere omnis consequatur est cum. Et ea eligendi mollitia laborum quis et autem et repellat.'}
                    image={'http://placeimg.com/640/480/people'}
                />
                <h2 className="title-main">Users list</h2>
                <div className="content-main">
                    {
                        loading
                            ?
                            <div className="alert alert-info">Loading data ...</div>
                            :
                            users.length
                                ?
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th className="text-center">ID</th>
                                            <th>Avatar</th>
                                            <th>First name</th>
                                            <th>Last name</th>
                                            <th>Full name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(user => {
                                                const fullName = `${user.first_name} ${user.last_name}`;

                                                return (
                                                    <tr key={user.id}>
                                                        <td className="text-center">{user.id}</td>
                                                        <td>
                                                            <img
                                                                className={clsx(UsersStyles.userAvatar, 'cursor-pointer rounded-1 transition')}
                                                                src={user.avatar}
                                                                alt={fullName}
                                                                onClick={() => this.handleOnClickViewDetail(user)}
                                                            />
                                                        </td>
                                                        <td>{user.first_name}</td>
                                                        <td>{user.last_name}</td>
                                                        <td>
                                                            <span className="cursor-pointer" onClick={() => this.handleOnClickViewDetail(user)}>{fullName}</span>
                                                        </td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                                :
                                <div className="alert alert-info">No users found</div>
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(WithRouter(ListUser));