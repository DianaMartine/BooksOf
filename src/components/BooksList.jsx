import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/BooksList.module.css";

const BooksList = () => {
  const [isActive, setIsActive] = useState(false);
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const bookList = [];
  const volumeInfo = [];
  const title = [];
  const authors = [];
  const authorsUpdated = [];
  const img = [];
  const imgLink = [];

  useEffect(() => {
    let search = q;

    if (search !== "") {
      const getApi = async () => {
        const query = search;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
        );
        const data = await response.data;
        setBooks(data);
        setTotalItems(data.totalItems);
        setItems(data.items);
      };
      getApi();
    }
  }, [q]);

  const updateBookList = () => {
    items.map((book) => {
      return bookList.push(book);
    });
    bookList.map((book) => {
      return volumeInfo.push(book.volumeInfo);
    });
    volumeInfo.map((book) => {
      return title.push(book.title);
    });
    volumeInfo.map((book) => {
      return authors.push(book.authors);
    }) &&
      authors.map((item) => {
        return item === undefined
          ? (item = "Not Found")
          : authorsUpdated.push(item);
      });
    volumeInfo.map((link) => {
      return img.push(link.imageLinks);
    }) &&
      img.map((link) => {
        return link === undefined ? (link = "Not Found") : imgLink.push(link);
      });
  };

  updateBookList(books);

  return (
    <div className={styles.containerList}>
      <input tabIndex='1'
        type="text"
        name="input"
        placeholder="Insira aqui o nome da pessoa autora ou obra"
        className={styles.input}
        onChange={(e) => {
          setQ(e.target.value);
          if (e.target.value.trim() !== "" && isActive !== true) {
            setIsActive(true);
          }
        }}
        onKeyUp={(e) => {
          if (e.target.value.trim() === "") {
            setQ(e.target.value);
            setIsActive(false);
          }
        }}
      />
      <div
        className={styles.divOff}
        style={{ display: `${isActive ? "block" : "none"}` }}
      >
        <h2 className={styles.results}>
          Foram encontrados <strong>{totalItems}</strong> resultados
        </h2>
        <h2 className={styles.results}>
          <strong>Exibindo primeiros da Lista</strong>
        </h2>
        <br />
        <div className={styles.list}>
          <div className={styles.title}>
            <h1>Livros encontrados</h1>
            {title.map((title) => (
              <div>
                <br />
                <a
                  href={`https://google.com/search?q=${title} book`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li key={books.id}>{title}</li>
                </a>
              </div>
            ))}
          </div>
          <div className={styles.authors}>
            <h1>Autores Relacionados</h1>
            {authorsUpdated.map((author) => (
              <div className={styles.author}>
                <br />
                <a
                  href={`https://google.com/search?q=${author}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{author}</strong>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <h1>Capas</h1>
          <div className={styles.containerImg}>
            {imgLink.map((link) => (
              <a href={link.thumbnail} target="_blank" rel="noreferrer">
                <img src={link.thumbnail} alt="capa" className={styles.img} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;