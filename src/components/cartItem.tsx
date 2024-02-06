import styled from "styled-components";
import Image from "next/image";
import { IBookInCart } from "../types/types";
import myGif from "../images/dummy-image-212x300.gif";
import Rating from "./rating";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStoreType } from "../store/store";
import { addQuantity, deleteQuantity } from "../store/reducers/cart_reducer";
import iconAdd from "../images/icon-add-quantity.svg";
import iconDelete from "../images/icon-delete-quantity.svg";

export default function CartItem({ items }: any) {
  const dispatch = useDispatch();

  const booksInCart = useSelector<AppRootStoreType, IBookInCart[]>(
    (state) => state.cart.booksInCart
  );

  const quantity = booksInCart.find((el) => el?.id === items?.id)?.quantity;

  const addBookInCart = (e) => {
    dispatch(addQuantity({ bookId: e.target.dataset.id }));
  };

  const deleteBookInCart = (e) => {
    dispatch(deleteQuantity({ bookId: e.target.dataset.id }));
  };

  return (
    <Container>
      <BlockBook>
        <ImageBook>
          <Image
            src={
              "imageLinks" in items.volumeInfo
                ? items.volumeInfo.imageLinks.thumbnail
                : myGif
            }
            width={102.5}
            height={145}
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
        </InfoBook>
      </BlockBook>

      <BlockQuantity>
        <button onClick={(e) => deleteBookInCart(e)}>
          <Image
            src={iconAdd}
            width={22}
            height={25}
            alt="icon-add-book"
            data-id={items.id}
          />
        </button>
        <div>{quantity ?? 1}</div>
        <button onClick={(e) => addBookInCart(e)}>
          <Image
            src={iconDelete}
            width={19.5}
            height={19.5}
            alt="icon-delete-book"
            data-id={items.id}
          />
        </button>
      </BlockQuantity>

      <RetailPrice>
        {items.saleInfo.retailPrice.amount}{" "}
        {items.saleInfo.retailPrice.currencyCode}
      </RetailPrice>

      <Saleability>{items.saleInfo.saleability}</Saleability>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1120px;
  justify-content: space-between;
  align-items: center;
`;

const BlockBook = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;

const ImageBook = styled.div`
  width: 102.5px;
  height: 145px;
  margin-right: 26px;

  .placeholder-poster {
    background-color: #5c6a79;
  }
`;

const InfoBook = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  height: inherit;
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
  width: 150px;
`;

const BlockQuantity = styled.div`
  display: flex;
  width: 200px;
  height: 45px;
  border: 1px solid #eeedf5;
  justify-content: space-between;
  align-items: center;
  color: #5c6a79;
  padding-left: 15px;
  padding-right: 15px;

  button {
    display: flex;
  }
`;

const Saleability = styled.div`
  width: 100px;
`;
