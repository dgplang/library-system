// Create a library system with the following features:
// - Add a book to the library
// - Delete a book in the library
// - Update a book in the library
// - Get a book from the library
// - View all books in the library
// You are not restricted to the features listed above.
// Use functions, arrays and objects
// Form closes by 4PM tomorrow


// Declaration and initial population of the Library array of Book Objects

const libraryDb = [];

// Add book

function addBook(bookTitle, bookAuthors, pubYear) {
    const newTitle = {
      bookTitle: bookTitle,
      bookAuthors: bookAuthors,
      pubYear: pubYear,
    };
    libraryDb.push(newTitle);
}

// Usage of add member function

addBook("The Lost Kingdom", "Isabelle Winters", 2002);
addBook("Shadows of Eternity", "Thomas Granger", 1999);
addBook("Whispers of the Forest", "Amelia Rae", 2011);
addBook("The Midnight Sun", "James Holloway", 2018);
addBook("Rise of the Phoenix", "Lydia Stone", 2004);
addBook("Tides of Destiny", "Marcus Flint", 2015);
addBook("The Ember Flame", "Naomi Grace", 2020);
addBook("Legacy of the Ancients", "Sebastian Ward", 1997);
addBook("Echoes in the Rain", "Hannah Blake", 2009);
addBook("The Clockwork Heart", "Oliver Reeve", 2013);
addBook("Storm of Secrets", "Bianca Rivers", 2005);
addBook("The Last Oracle", "Jonathan Cray", 2010);
addBook("City of Glass", "Elena Cross", 2016);
addBook("Path of the Seeker", "Daniel Crowe", 2000);
addBook("Beneath the Silver Sky", "Sophia Trent", 2007);
addBook("Guardians of the Flame", "Matthew Doyle", 2021);
addBook("The Crystal Labyrinth", "Caroline West", 2006);
addBook("Chronicles of the Stars", "Felix Hart", 2019);
addBook("Dreams of Fire", "Natalie Quinn", 2003);
addBook("Mystic Riverbank", "Aaron Bright", 2001);


console.log("---------------------------------------------")

console.log("CURRENT LIST OF BOOKS")

for (i = 0; i < libraryDb.length; i++) {
    console.log(`${i+1}. "${libraryDb[i].bookTitle}", ${libraryDb[i].bookAuthors}, ${libraryDb[i].pubYear}`)
}

console.log("---------------------------------------------")
