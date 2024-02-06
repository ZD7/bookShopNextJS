import styled from "styled-components";
import Image from "next/image";
import { IBook, IBookInCart } from "../types/types";
import myGif from "../images/dummy-image-212x300.gif";
import Rating from "./rating";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStoreType } from "../store/store";
import { addBook } from "../store/reducers/cart_reducer";

export default function Book({ items }: any) {
  
  const dispatch = useDispatch(); 

  const loadBooks = useSelector<AppRootStoreType, IBook[]>(
    (state) => state.data.loadBooks
  );

  const booksInCart = useSelector<AppRootStoreType, IBookInCart[]>(
    (state) => state.cart.booksInCart
  );  

  const addBookInCart = (e) => {
    const book = loadBooks.find((el) => el.id === e.target.dataset.id);
    
    if (book !== undefined) {
      dispatch(addBook({ book }));
    }
  };

  return (
    <Container>
      <ImageBook>
        <Image
          src={
            "imageLinks" in items.volumeInfo
              ? items.volumeInfo.imageLinks.thumbnail
              : myGif
          }
          width={212}
          height={300}
          className="placeholder-poster"
          alt="poster"
        />
      </ImageBook>
      <InfoBook>
        {"authors" in items.volumeInfo && (
          <Authors>{items.volumeInfo.authors}</Authors>
        )}
        <NameBook>{items.volumeInfo.title}</NameBook>
        <BlockRating>
          {"averageRating" in items.volumeInfo && (
            <Rating rating={items.volumeInfo.averageRating} />
          )}
          {"ratingsCount" in items.volumeInfo && (
            <div>
              {items.volumeInfo.ratingsCount}
              {"M review"}
            </div>
          )}
        </BlockRating>
        {"description" in items.volumeInfo && (
          <Description>{items.volumeInfo.description}</Description>
        )}
        {items.saleInfo.saleability === "FOR_SALE" ? (
          <RetailPrice>
            {items.saleInfo.retailPrice.amount}{' '}
            {items.saleInfo.retailPrice.currencyCode}
          </RetailPrice>
        ) : (
          <RetailPrice>
            {items.saleInfo.saleability}
          </RetailPrice>
        )}
        {booksInCart.some((el) => el?.id === items.id) ? (
          <InTheCart>IN THE CART</InTheCart>
        ) : (items.saleInfo.saleability === "FOR_SALE" &&
          <BuyNow onClick={(e) => addBookInCart(e)} data-id={items.id}>
            BUY NOW
          </BuyNow>
        )}
      </InfoBook>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const ImageBook = styled.div`
  width: 212px;
  height: 300px;
  margin-right: 36px;

  .placeholder-poster {
    background-color: #efeef6;
  }
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 16px;
  font-family: "OpenSans";
  font-size: 10px;
  line-height: 13.6px;
  color: #5c6a79;
`;

const InfoBook = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  height: inherit;
  margin-top: 49px;
`;

const BlockRating = styled.div`
  display: flex;
  line-height: 13.6px;
  margin-bottom: 16px;
  gap: 6px;

  font-family: "OpenSans";
  font-size: 10px;
  color: #5c6a79;
`;

const Authors = styled.div`
  font-family: "OpenSans";
  font-size: 10px;
  line-height: 13.6px;
  text-align: left;
  color: #5c6a79;
  margin-bottom: 4px;
`;

const NameBook = styled.div`
  margin-bottom: 4px;
`;

const RetailPrice = styled.div`
  font-size: 13px;
  margin-bottom: 16px;
`;

const BuyNow = styled.button`
  width: 176px;
  height: 45px;
  border: 1px solid #4c3db2;
  color: #4c3db2;
  background-color: #ffffff;
  font-size: 8px;
`;

const InTheCart = styled.div`
  width: 176px;
  height: 45px;
  background-color: #ffffff;
  font-size: 8px;
  color: #5c6a79;
  border: 1px solid #eeedf5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
