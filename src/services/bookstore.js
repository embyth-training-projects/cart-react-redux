const rawBookData = [
  {
    id: 1,
    title: 'Harry Potter and the Philosophers Stone',
    author: 'J. K. Rowling',
  },
  {
    id: 2,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
  },
  {
    id: 3,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
  },
  {
    id: 4,
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
  },
  {
    id: 5,
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J. K. Rowling',
  },
  {
    id: 6,
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J. K. Rowling',
  },
  {
    id: 7,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
  },
];

export default class BookstoreService {
  getBooks() {
    return rawBookData;
  }
}
