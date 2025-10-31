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
      amazon:
        "https://www.amazon.in/NCERT-CLASS-MATHEMATICS-CHEMISTRY-FLEMINGO/dp/B09SBX6V6H/ref=sr_1_3?dib=eyJ2IjoiMSJ9.1xeWQmrOh0MbUIsekS9awKQl-51Vli_UQhwU7tk9pXEQmHuLs7gwYA4KFhewTA1BFJC8tNClDS-gdKDnZEb-NKcvpVTWrms60DIH3Ku7rslMVrzeqmEMUpHiWNxkpQ8Zkpva0k6bYXwfCmvLAGPH4vn8dSeQ28-hR5DeApwHiyefSTR4y22OicSJ89jsjV1kShrIQWlvg1ga8cwCaaEdmgCj6-TH5tzWA13ixW-y2DU.48K-sHuMfBmfULMO78qUfu3Y4c0SM_ia-j3HFhkUEBA&dib_tag=se&qid=1742267619&refinements=p_27%3ANCERT&s=books&sr=1-3",
    },
    {
      title: "Cryptography",
      author: "Subani Khan",
      subject: "IT",
      date: "2022-11-11",
      price: "₹750",
      about: "A comprehensive guide on cryptography and its applications.",
      image: "pictures/CRY.png",
      amazon:
        "https://www.amazon.in/Cryptography-Network-Security-Principles-Practice/dp/9357059717/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.LzlcIMigv2xN1kKs9v_-6gpbtxojfIi0mOnfW0RbFnfTvYtho6MwEY4CgJo-PRCc9I0knnBpdMoL5RBUoNPCjsp4z1C3PohBqezkwYP9I-c_UdDu19lBIyzAWxg4jJLVm_5_cfGbYHIleBkgMQo5tDVSuxkDiHO24Gm6Nhfmt8SwZbc0CSjbLOzb6zSKkqaO0zX3savuGMnjxPLlWFx5i2EfbIAdB4oVFD0mguD9FqBxKKgzecOGggyfdbeDvPWI0Xhmi9owpC-91zKWBDRUMWZsAQlbNY5nF_d-wdRn-AQ.4LTXB3FzH81VdVY03E68y2zenCmX8RWSN5J_R2PhI6I&dib_tag=se&keywords=Cryptography+Book&qid=1742266828&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      title: "DBMS",
      author: "Jashwanth Ram",
      subject: "IT",
      date: "2022-12-22",
      price: "₹650",
      about: "A detailed book on Database Management Systems and SQL.",
      image: "img/Database.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Computer Networks and Security",
      author: "Priyanka",
      subject: "CSE",
      date: "2022-03-20",
      price: "₹850",
      about: "An essential book on networking and cybersecurity principles.",
      image: "img/cns.jpg",
      amazon: "https://www.amazon.in/s?k=Computer+Networks+Security+Book",
    },
    {
      title: "Mental Peace",
      author: "Sowmya T",
      subject: "Novel",
      date: "2022-11-10",
      price: "₹550",
      about: "A novel exploring mindfulness and achieving inner peace.",
      image: "img/Network.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Artificial Intelligence",
      author: "Harish P",
      subject: "ISE",
      date: "2022-12-20",
      price: "₹900",
      about: "A book on artificial intelligence and machine learning.",
      image: "img/Os.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Operating Systems",
      author: "Galvin",
      subject: "CS",
      date: "2021-07-15",
      price: "₹950",
      about: "A detailed book on operating system concepts.",
      image: "img/os.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Data Structures & Algorithms",
      author: "Mark Weiss",
      subject: "CS",
      date: "2020-08-01",
      price: "₹1200",
      about: "A practical guide to data structures and algorithms.",
      image: "img/dsa.jpg",
      amazon: "https://www.amazon.in/s?k=Data+Structures+Algorithms+Book",
    },
    {
      title: "Python Programming",
      author: "Guido van Rossum",
      subject: "Programming",
      date: "2019-09-18",
      price: "₹850",
      about: "A beginner-friendly book on Python programming.",
      image: "img/python.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Machine Learning",
      author: "Tom Mitchell",
      subject: "AI",
      date: "2018-05-20",
      price: "₹1350",
      about: "A foundational book on machine learning concepts.",
      image: "img/ml.jpg",
      amazon: "https://www.amazon.in/s?k=Machine+Learning+Tom+Mitchell",
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow",
      subject: "AI",
      date: "2017-11-30",
      price: "₹1700",
      about: "An advanced guide to deep learning techniques.",
      image: "img/deep.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Java: The Complete Reference",
      author: "Herbert Schildt",
      subject: "Programming",
      date: "2022-06-10",
      price: "₹1150",
      about: "A comprehensive book on Java programming.",
      image: "img/java.jpg",
      amazon: "https://www.amazon.in/s?k=Java+Complete+Reference",
    },
    {
      title: "Computer Graphics",
      author: "Donald Hearn",
      subject: "Graphics",
      date: "2021-03-15",
      price: "₹980",
      about: "A guide to computer graphics and visual computing.",
      image: "img/cg.jpg",
      amazon: "https://www.amazon.in/s?k=Operating+System+Galvin",
    },
    {
      title: "Cyber Security",
      author: "William Stallings",
      subject: "Security",
      date: "2023-01-25",
      price: "₹1350",
      about: "A book covering cybersecurity principles and techniques.",
      image: "img/cyber.jpg",
      amazon: "https://www.amazon.in/s?k=Cyber+Security+Book",
    },
  ],
};

function displayBooks(filteredBooks) {
  let booksContainer = document.getElementById("Books");
  booksContainer.innerHTML = ""; // Clear previous books

  filteredBooks.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-title", i.title);
    card.setAttribute("data-author", i.author);
    card.setAttribute("data-subject", i.subject);
    card.setAttribute("data-date", i.date);
    card.setAttribute("data-price", i.price);
    card.setAttribute("data-about", i.about);
    card.setAttribute("data-image", i.image);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.innerText = i.title;
    container.appendChild(title);

    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);
    booksContainer.appendChild(card);

    // Add click event to each book
    card.addEventListener("click", function () {
      if (i.amazon) {
        window.open(i.amazon, "_blank"); // Open Amazon link in new tab
      } else {
        window.location.href = `book-details.html?title=${encodeURIComponent(
          i.title
        )}`;
      }
    });
  });
}

// Display all books initially
displayBooks(products.data);

// Filter function
function filterProduct(category) {
  if (category === "all") {
    displayBooks(products.data);
  } else {
    let filteredBooks = products.data.filter(
      (book) => book.subject === category
    );
    displayBooks(filteredBooks);
  }
}
function displayBooks(filteredBooks) {
  let booksContainer = document.getElementById("Books");
  booksContainer.innerHTML = ""; // Clear previous books

  filteredBooks.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.innerText = i.title;
    container.appendChild(title);

    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);
    booksContainer.appendChild(card);

    // Add click event to each book
    card.addEventListener("click", function () {
      localStorage.setItem("selectedBook", JSON.stringify(i));
      window.location.href = "book-details.html"; // Redirect to details page
    });
  });
}
