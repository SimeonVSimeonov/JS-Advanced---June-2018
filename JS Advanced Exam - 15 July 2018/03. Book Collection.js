class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {

        if (room === "livingRoom" || room === "bedRoom" || room === "closet") {

            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;

        } else {
            throw Error(`Cannot have book shelf in ${room}`);
        }
    }

    addBook(bookName, bookAuthor, genre) {
        let currentCapacity = this.shelf.length;
        let totalCapacity = this.shelfCapacity;
        if (currentCapacity === totalCapacity) {
            this.shelf.shift();
        }
        this.shelf.push({bookName, bookAuthor, genre});
        this.shelf.sort((a, b) => {
            let left = a.bookAuthor;
            let right = b.bookAuthor;
            return left.localeCompare(right);
        });

        return this;
    }

    throwAwayBook(bookName) {
        // find index of the book
        let index = 0;
        for (let book of this.shelf) {
            if (book.bookName === bookName) {
                break
            }
            index++;
        }
        this.shelf.splice(index, 1)
    }

    showBooks(genre) {
        // find all books
        let allBooks = [];
        for (let book of this.shelf) {
            if (book.hasOwnProperty("genre") && book.genre === genre) {
                allBooks.push(book);
            }
        }
        let result = `Results for search ${genre}:\n`;
        for (let i = 0; i < allBooks.length; i++) {
            let book = allBooks[i];
            if (i !== allBooks.length - 1) {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
            } else {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`;
            }
        }

        return result;
    }

    get shelfCondition() {
        let currentCapacity = this.shelf.length;
        let totalCapacity = this.shelfCapacity;
        return totalCapacity - currentCapacity;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        } else {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;

            for (let i = 0; i < this.shelf.length; i++) {
                let book = this.shelf[i];
                if (i !== this.shelf.length - 1) {
                    result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
                } else {
                    result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`;
                }

            }

            return result;
        }
    }

}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

//let garden = new BookCollection("Programming", "garden");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));


