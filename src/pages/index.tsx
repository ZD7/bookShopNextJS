import Layout from "../components/layout";
import { useEffect, useState } from "react";
import Book from "../components/book";
import Categories from "../components/categories";
import { IBook } from "../types/types";
import {
  setBooks,
  addChunkBooks,
  setPrevCategory,
} from "../store/reducers/data_reducer";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStoreType } from "../store/store";
import styled from "styled-components";
import Slider from "../components/slider";

export async function getServerSideProps() {
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&startIndex=0&maxResults=6`
  );
  const booksData = await data.json();

  return {
    props: {
      books: booksData.items,
    },
  };
}

export default function Home({ books }: any) {
  const dispatch = useDispatch();

  const loadBooks = useSelector<AppRootStoreType, IBook[]>(
    (state) => state.data.loadBooks
  );

  const categoryFromStore = useSelector<AppRootStoreType, string>(
    (state) => state.data.activeCategory
  );

  const prevCategory = useSelector<AppRootStoreType, string>(
    (state) => state.data.prevCategory
  );

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (categoryFromStore !== prevCategory) {
      fetch(`/api/books?subject=${categoryFromStore}&startIndex=0`)
        .then((data) => data.json())
        .then((data) => {
          dispatch(setBooks({ books: data.books }));
        })
        .catch((err) => {
          console.log("error", err);
        });
      dispatch(setPrevCategory({ category: categoryFromStore }));
    }
  }, [categoryFromStore, dispatch]);

  const getMoreBooks = () => {
    setStartIndex(startIndex + 6);

    fetch(
      `/api/books?subject=${categoryFromStore}&startIndex=${startIndex + 6}`
    )
      .then((data) => data.json())
      .then((data) => {
        if (loadBooks.length === 0) {
          dispatch(addChunkBooks({ сhunkBooks: [...books, ...data.books] }));
        } else {
          dispatch(addChunkBooks({ сhunkBooks: data.books }));
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Layout title={"Home Page"}>
      <Categories />
      <Slider />
      {!!loadBooks.length ? (
        <Container>
          {loadBooks.map((book: IBook, i) => (
            <Book key={i} items={book} />
          ))}
        </Container>
      ) : (
        <Container>
          {books.map((book: IBook, i) => (
            <Book key={i} items={book} />
          ))}
        </Container>
      )}
      <LoadMore onClick={getMoreBooks}>Load more</LoadMore>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 924px;
  margin-left: 196px;
  z-index: 2;
  gap: 96px 76px;
  margin-top: 151px;
  margin-bottom: 96px;
`;

const LoadMore = styled.button`
  width: 176px;
  height: 45px;
  border: 1px solid #4c3db2;
  color: #4c3db2;
  background-color: #ffffff;
  margin-bottom: 74px;
`;
