import styled from "styled-components";
import { setCategory } from "../store/reducers/data_reducer";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStoreType } from "../store/store";

export default function Categories() {
  const dispatch = useDispatch();

  const categoryFromStore = useSelector<AppRootStoreType, string>(
    (state) => state.data.activeCategory
  );

  const categories = [
    "Architecture",
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ];

  const changeCategory = (e) => {
    dispatch(setCategory({ category : e.target.innerText }));
  };

  return (
    <Container>
      <ListCategories>
        {categories.map((category: any, i) =>
          category === categoryFromStore ? (
            <ActiveItem key={i}>
              <ActiveCategory>{category}</ActiveCategory>
            </ActiveItem>
          ) : (
            <Item key={i}>
              <Category onClick={(e) => changeCategory(e)}>{category}</Category>
            </Item>
          )
        )}
      </ListCategories>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 710px;
  background: #efeef6;
  justify-content: space-between;
  align-items: start;
  position: absolute;
  padding-left: 120px;
  padding-top: 45px;
  padding-bottom: 81px;
  left: 0px;
  top: 839px;
`;

const ListCategories = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px;
  justify-content: space-between;
  align-items: start;
`;

const Item = styled.li`
  list-style: none;
`;

const ActiveItem = styled.li`
  margin-left: -22px;
  list-style: inside;
  color: #756ad3;
  font-size: 16px;
`;

const Category = styled.button`
  color: #5c6a79;
  font-size: 12px;
  border: none;
  cursor: pointer;
  font-family: "MontserratMedium";
`;

const ActiveCategory = styled.button`
  color: #1c2a39;
  font-size: 16px;
  border: none;
  cursor: not-allowed;
  font-family: "Montserrat";
`;
