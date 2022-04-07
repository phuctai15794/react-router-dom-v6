import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import WithRouter from '../../../utils/WithRouter';
import { MetaData } from '../../../utils/MetaData';
import UsersStyles from '../../../styles/Users.module.scss';

class DetailUser extends React.Component {
    state = {
        loading: true,
        user: {}
    }

    componentDidMount() {
        const { id } = this.props.router.params;
        const { urlAPI } = this.props.dataRedux;

        axios.get(`${urlAPI}/api/users/${id}`)
            .then(res => {
                this.setState({
                    loading: false,
                    user: res.data.data
                })
            })
            .catch(error => {
                toast.error(`${error}`);
            });
    }

    handleOnClickBackUsers = () => {
        const { navigate } = this.props.router;
        navigate('/users', {
            replace: true
        });
    }

    render() {
        const { loading, user } = this.state;
        const isEmpty = Object.keys(user).length === 0;
        const fullName = !isEmpty && `${user.first_name} ${user.last_name}`;

        return (
            <>
                <h2 className="title-main">Detail user</h2>
                <div className="content-main">
                    {
                        loading
                            ?
                            <div className="alert alert-info">Loading data ...</div>
                            :
                            !isEmpty
                                ?
                                <>
                                    <MetaData
                                        title={fullName}
                                        keywords={'Inc,and Sons,LLC,Group'}
                                        description={'Voluptatum nihil occaecati est numquam. Molestiae dolorum architecto accusamus veritatis. Ipsa est magnam dolorem quasi repellat repellat nam eveniet. Harum tempora quidem facere omnis consequatur est cum. Et ea eligendi mollitia laborum quis et autem et repellat.'}
                                        image={user.avatar}
                                    />
                                    <div className={UsersStyles.userDetail}>
                                        <div className="row">
                                            <div className="col-2">
                                                <img className={UsersStyles.userDetailAvatar} src={user.avatar} alt={fullName} />
                                            </div>
                                            <div className="col-10">
                                                <div className={UsersStyles.userDetailInfo}>
                                                    <h5 className="mt-0">{fullName}</h5>
                                                    <p>{user.email}</p>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                        onClick={() => this.handleOnClickBackUsers()}
                                                    >Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="alert alert-info">No user detail found</div>
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

export default connect(mapStateToProps)(WithRouter(DetailUser));