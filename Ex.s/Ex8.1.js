/* 1. Create an object that represents a book. It should have
4-5 properties that make sense for a book to have.
2. Then write a function that has one argument, a book,
that will return the following description from your book
object:
`The book <book name> was written by <author name> in
the year <publishing yeary */

const Book={
    BookName : 'Crooked House',
    AutherName : 'Agatha Christie',
    PublishingYear : 1949,
    BookType : 'Detective Novel'
};
function FunBook(Book){
    return `The book ${Book.BookName} was written by ${Book.AutherName} in the year ${Book.PublishingYear}, is a ${Book.BookType}`;
}
console.log(FunBook(Book)); 


