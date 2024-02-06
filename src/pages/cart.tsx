import Layout from "../components/layout";
import { useSelector } from "react-redux";
import { AppRootStoreType } from "../store/store";
import CartItem from "../components/cartItem";
import styled from "styled-components";

export default function Cart() {
  const booksInCart = useSelector<AppRootStoreType, any[]>(
    (state) => state.cart.booksInCart
  );  

  const totalPrice = booksInCart.reduce((acc, el) => {
    let total = 0;

    if (el.quantity !== undefined) {
      total = el.saleInfo.retailPrice.amount * el.quantity;
    } else {
      total = el.saleInfo.retailPrice.amount;
    }

    return acc + total;
  }, 0);

  return (
    <Layout title={"Cart Page"}>
      <Wrapper>
        <Header>
          {!!booksInCart.length ? "SHOPPING CART" : "SHOPPING CART IS EMPTY"}
        </Header>
        {!!booksInCart.length && (
          <>
            <TableHeader>
              <div className="item">item</div>
              <div className="quantity">quantity</div>
              <div className="price">price</div>
              <div className="saleability">saleability</div>
            </TableHeader>

            <BlockCart>
              {booksInCart.map((book: any, index) => (
                <>{book && <CartItem key={index} items={book} />}</>
              ))}
            </BlockCart>

            <Price>TOTAL PRICE: {totalPrice.toFixed(2)}</Price>
            <Checkout>CHECKOUT</Checkout>
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 87px;
  width: 1120px;
`;

const BlockCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 77px;
  margin-bottom: 117px;
`;

const Header = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #1c2a39;
  margin-bottom: 19px;
`;

const Price = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #1c2a39;
  margin-bottom: 19px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  text-transform: uppercase;
  width: 1120px;
  font-size: 10px;
  line-height: 12px;
  color: #5c6a79;

  .item {
    width: 350px;
  }
  .price {
    width: 150px;
  }
  .quantity {
    width: 200px;
  }

  .saleability {
    width: 100px;
  }
`;

const Checkout = styled.button`
  width: 176px;
  height: 45px;
  border: 1px solid #4c3db2;
  color: #4c3db2;
  background-color: #ffffff;
  margin-bottom: 87px;
`;
