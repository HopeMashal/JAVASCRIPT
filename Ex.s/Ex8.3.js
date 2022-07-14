/* 1. create 2 book objects with properties: name, author, year.
2. create an empty object bookUtils (utils = short for utilities).
3. add to to the bookUtils object a function getFirstPublished, that recieves 2
books and returns the book with the smaller year.
4. add to to the bookUtils object a function setNewEdition, that recieves a
book and an edition year and sets a new property latestEdition with the
edition year, or updates an existing one.
5. add to to the bookUtils object a setLanguage function, that recieves a book
and a language and sets a new property language with the languahe, or
updates an existing one.
6. add to to the bookUtils object a setTranslation function, that recieves a
book a language and a translator, and sets a new property of translation,
which is an object that contains the translator and the language.
7. add to to the bookUtils object a setPublisher function, that recieves a book
a name and a location, and sets a new property named publisher, which is an
object that contains the name and location.
8. add to to the bookUtils object a function isSamePublisher, that recieves 2
books and checks if the publisher name and location are identical in the 2
books. */

const Book1={
    name: 'The Murder of Roger Ackroyd',
    author: 'Agatha Christie', 
    year:1926
};
const Book2={
    name: 'The Murder at the Vicarage',
    author: 'Agatha Christie', 
    year:1930
};
const bookUtils={
    getFirstPublished(Book1, Book2){
        return Book1.year>Book2.year?Book2:Book1;
    },
    setNewEdition(Book,EditionYear){
        Book.latestEdition=EditionYear;
    },
    setLanguage(Book,Language){
        Book.language=Language;
    },
    setTranslation(Book,Language,Translator){
        Book.translation={
            TranslationLang:Translator,
            NewLanguage:Language
        };
    },
    setPublisher(Book,name,location){
        Book.publisher={
            PublisherName: name,
            NewLocation: location
        };
    },
    isSamePublisher(Book1, Book2){
        if(Book1.publisher.PublisherName == Book2.publisher.PublisherName && Book1.publisher.NewLocation == Book2.publisher.NewLocation){
            return "The publisher name and location are identical in the two books";}
        else {
            return "The publisher name and location are different in the two books";}
    }

};
console.log(bookUtils.getFirstPublished(Book1, Book2));

Book1.publisher= {
    PublisherName: 'name',
    NewLocation: 'location'
};
Book2.publisher= {
    PublisherName: 'name',
    NewLocation: 'location'
};
console.log(bookUtils.isSamePublisher(Book1, Book2));

