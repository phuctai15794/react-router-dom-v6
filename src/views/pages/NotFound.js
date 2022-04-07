import React from 'react';
import { MetaData } from '../../utils/MetaData';

class NotFound extends React.Component {
    render() {
        return (
            <>
                <MetaData
                    title={'Not Found'}
                    keywords={'Inc,and Sons,LLC,Group'}
                    description={'Voluptatum nihil occaecati est numquam. Molestiae dolorum architecto accusamus veritatis. Ipsa est magnam dolorem quasi repellat repellat nam eveniet. Harum tempora quidem facere omnis consequatur est cum. Et ea eligendi mollitia laborum quis et autem et repellat.'}
                    image={'http://placeimg.com/640/480/nature'}
                />
                <div className="alert alert-warning text-center"><h4 className="mb-0">Not found</h4></div>
            </>
        );
    }
}

export default NotFound;