const rawBookData = [
  {
    id: 1,
    title: 'Harry Potter and the Philosophers Stone',
    author: 'J. K. Rowling',
    price: 15.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
  },
  {
    id: 2,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    price: 17.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg',
  },
  {
    id: 3,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
    price: 20.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg/220px-Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
  },
  {
    id: 4,
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
    price: 22.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png/220px-Harry_Potter_and_the_Goblet_of_Fire_cover.png',
  },
  {
    id: 5,
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J. K. Rowling',
    price: 22.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/220px-Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
  },
  {
    id: 6,
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J. K. Rowling',
    price: 22.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png/220px-Harry_Potter_and_the_Half-Blood_Prince_cover.png',
  },
  {
    id: 7,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
    price: 25.99,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
  },
];

export default class BookstoreService {
  getBooks() {
    return new Promise((resolve) => {
      // setTimeout(() => resolve(rawBookData), 1000);
      resolve(rawBookData);
    });
  }
}
