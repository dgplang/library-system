// Create a library system with the following features:
// - Add a book to the library
// - Delete a book in the library
// - Update a book in the library
// - Get a book from the library
// - View all books in the library
// You are not restricted to the features listed above.
// Use functions, arrays and objects

// Declaration and initial population of the Library array of Book Objects

const libraryDb = [];

// Function for Adding Book

function addBook(bookTitle, bookAuthors, pubYear) {
    const newTitle = {
      bookTitle: bookTitle,
      bookAuthors: bookAuthors,
      pubYear: pubYear,
    };
    libraryDb.push(newTitle);
}

// Usage of add member function

addBook("The Lose Kingdom", "Isabella Wint", 2000);
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

// Function to Delete Book

function deleteBook(bookT) {
    for (i = 0; i < libraryDb.length; i++) {
      if (libraryDb[i].bookTitle === bookT) {
        indexToRemove = i
        console.log(`${libraryDb[i].bookTitle} on serial no. ${i+1} will be deleted shortly.`)
        break
      }
    }
    for (j = indexToRemove; j < libraryDb.length -1; j++) {
      libraryDb[j] = libraryDb[j + 1]
    }
    libraryDb.length = libraryDb.length - 1
  
    console.log("---------------------------------------------")
  
    console.log("CURRENT LIST OF BOOKS AFTER DELETING A BOOK")
  
    for (k = 0; k < libraryDb.length; k++) {
        console.log(`${k+1}. "${libraryDb[k].bookTitle}", ${libraryDb[k].bookAuthors}, ${libraryDb[k].pubYear}`)
    }
}
  
// Usage of function to delete a book
  
deleteBook("Mystic Riverbank")
  
console.log("---------------------------------------------")

function updateBook(bTitle) {
    console.log("BOOK UPDATE RESULT:")
    for (let member of libraryDb) {
      if (member.bookTitle === bTitle) {
        console.log(`Wrong Detail: "${member.bookTitle}", ${member.bookAuthors}, ${member.pubYear}`);
        member.bookTitle = "The Lost Kingdom"
        member.bookAuthors = "Isabelle Winters"
        member.pubYear = 2002
        console.log(`Correct Detail: "${member.bookTitle}", ${member.bookAuthors}, ${member.pubYear}`);
        return;
      }
    }
    console.log(`The book with title: "${bTitle}" is not found.`);
}

// Usage of the function to update member amount


updateBook("The Lose Kingdom", "Isabella Wint", 2000);

console.log("---------------------------------------------")

// Get Book

function getBook(bkTitle) {
    console.log(`Book search result for "${bkTitle}":`)
    for (let k = 0; k < libraryDb.length; k++) {
      if (libraryDb[k].bookTitle === bkTitle) {
        console.log(`Book exists with the following detail: ${k+1}. "${libraryDb[k].bookTitle}", ${libraryDb[k].bookAuthors}, ${libraryDb[k].pubYear}`)
        return
      }
    }
    console.log(`Book not found.`);
}

// Usage of the function to get book

getBook("Whispers of the Jungle")

console.log("---------------------------------------------")

getBook("Whispers of the Forest")
  
console.log("---------------------------------------------")

console.log("CURRENT LIST OF BOOKS")

for (l = 0; l < libraryDb.length; l++) {
    console.log(`${l+1}. "${libraryDb[l].bookTitle}", ${libraryDb[l].bookAuthors}, ${libraryDb[l].pubYear}`)
}

console.log("---------------------------------------------")
