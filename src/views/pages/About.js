import React from 'react';
import { MetaData } from '../../utils/MetaData';

class About extends React.Component {
    render() {
        return (
            <>
                <MetaData
                    title={'About'}
                    keywords={'Inc,and Sons,LLC,Group'}
                    description={'Voluptatum nihil occaecati est numquam. Molestiae dolorum architecto accusamus veritatis. Ipsa est magnam dolorem quasi repellat repellat nam eveniet. Harum tempora quidem facere omnis consequatur est cum. Et ea eligendi mollitia laborum quis et autem et repellat.'}
                    image={'http://placeimg.com/640/480/animals'}
                />
                <h2 className="title-main">About us</h2>
                <div className="content-main">
                    <div className="card-text">
                        <p>What is a todo list and how can it help in business and daily life?</p>
                        <p>Do any of the following seem familiar?</p>
                        <ul>
                            <li>You often feel completely overwhelmed with the amount of work you’ve got to do?</li>
                            <li>You sometimes forget to do things that are important</li>
                            <li>People have to chase you to get things done</li>
                            <li>You find it a struggle to keep to deadlines</li>
                        </ul>
                        <p>Don’t think you’re unusual because there are thousands of people who struggle with the same every day, not just in the workplace but in their personal life too. Luckily, there is something very simple you can do to keep your life and work more organised.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default About;