const books = [
    { title: "GUMAN", author: "JAUN ELIA", price: "RS 249",pages: 200, img: "img1.jpg" },
    { title: "SAMMUCHI KAVITA", author: "SHIV KUMAR BATAVLI", price: "RS 249",pages: 300, img: "img2.jpg" },
    { title: "KULLIYAT", author: "AEHMAD FRAZ", price: "RS 199", pages: 150, img: "img3.jpg" },
    { title: "ASK-E-KHUSHBOO", author: "PARVEEN SHAKIR", price: "RS 199", pages: 250, img: "img4.webp" },
    { title: "YAMA", author: "MAHADEVI VERMA", price: "RS 149", pages: 320, img: "img5.webp" },
    { title: "IDGAH", author: "MUNSHI PREMCHAND", price: "199", pages: 400, img: "img7.jpg" },
    { title: "DO CHATTANEN", author: "HARIVANSH RAI BACHCHAN", price: "199", pages: 180, img: "img6.jpg" },
    { title: "KOI DEEWANA KEHTA HAI", author: "KUMAR VISHWAAS", price: "249", pages: 220, img: "img8.jpg" },
    { title: "TAVEEZ", author: "MANZAR BHOPALI", price: "RS 229", pages: 260, img: "img9.webp" },
    { title: "PRASHURAMA", author: "SHYAM NARAYAN PANDEY", price: "149", pages: 300, img: "img10.webP" },
];

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    if (name && dob && email && whatsapp) {
        alert(`Welcome, ${name}! You are now registered.`);
        
        document.getElementById('registrationForm').classList.add('hidden');
        document.getElementById('bookStore').classList.remove('hidden');

        loadBooks();
    }
});

function loadBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous content

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Pages: ${book.pages}</p>
            <p>Published Year: ${book.year}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

function filterBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous content

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
    );

    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Pages: ${book.pages}</p>
        `;
        bookList.appendChild(bookDiv);
    });

    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<p>No results found.</p>';
    }
}
