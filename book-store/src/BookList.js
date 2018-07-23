import React, {Component} from 'react';
import bookListData from './server/server-response/bookList';
import BookItem from './BookItem';

const {listOfBooks} = bookListData;

export default class bookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book-list-container">
            {listOfBooks.map((book) => {
                return (
                    <BookItem data={book} />
                )
            })}
            </div>
        );
    }
}