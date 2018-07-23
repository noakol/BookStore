import request from './baseApi';
import config from '../config';

export const getBookList = () => {
    const bookListUrl = `${config.baseUrl}/bookstore/bookList`;
    request({url: bookListUrl});
}