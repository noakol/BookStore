import React, {Component} from 'react';

export default class BookItem extends Component {
    constructor(props) {
        super(props);
    }

    openDetailsPage() {
        console.log('open');
    }

    render() {
        const {title, image} = this.props.data;
        
        return (
            <div className="book-item-container" onClick={() => this.openDetailsPage()}>
                <div className="boo-item">
                    <div className="book-title">
                    {title}
                    </div>
                    <div className="book-item-image">
                        <img src={image} alt="jsx-a11y/alt-text" />
                    </div>
                </div>
            </div>
        );
    }
}