let products = {
  data: [
    {
      title: "NCERT",
      author: "Ch. Hemchand",
      subject: "Basic",
      date: "2025-01-31",
      price: "₹500",
      about: "A fundamental book covering the NCERT syllabus in detail.",
      image: "img/NCER.jpg",
    },
    {
      title: "Cryptography",
      author: "Subani Khan",
      subject: "IT",
      date: "2022-11-11",
      price: "₹750",
      about: "A comprehensive guide on cryptography and its applications.",
      image: "img/crypto.jpg",
    },
    {
      title: "DBMS",
      author: "Jashwanth Ram",
      subject: "IT",
      date: "2022-12-22",
      price: "₹650",
      about: "A detailed book on Database Management Systems and SQL.",
      image: "img/Database.jpg",
    },
    {
      title: "Computer Networks and Security",
      author: "Priyanka",
      subject: "CSE",
      date: "2022-03-20",
      price: "₹850",
      about: "An essential book on networking and cybersecurity principles.",
      image: "img/cns.jpg",
    },
    {
      title: "Mental Peace",
      author: "Sowmya T",
      subject: "Novel",
      date: "2022-11-10",
      price: "₹550",
      about: "A novel exploring mindfulness and achieving inner peace.",
      image: "img/Network.jpg",
    },
    {
      title: "Artificial Intelligence",
      author: "Harish P",
      subject: "ISE",
      date: "2022-12-20",
      price: "₹900",
      about: "A book on artificial intelligence and machine learning.",
      image: "img/Os.jpg",
    },
  ],
};

function loadBookDetails() {
  let bookId = localStorage.getItem("selectedBookId");
  let book = books.find((b) => b.id == bookId);

  if (!book) {
    document.getElementById("book-info").innerHTML = "<p>Book not found!</p>";
    return;
  }

  document.getElementById("book-info").innerHTML = `
      <div class="book-container">
          <img src="${book.image}" alt="${book.title}">
          <div class="book-details-text">
              <h2>${book.title}</h2>
              <p>${book.description}</p>
              <h4>${book.price}</h4>
              <button class="btn order-btn">Order Now</button>
          </div>
      </div>
  `;
}

// Load book details on page load
loadBookDetails();
