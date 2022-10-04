import styled from 'styled-components';
import CategoryTheme from './CategoryTheme';

const Category = () => {
  return (
    <StyledCategory>
      <div className='category-container'>
        <CategoryTheme />
      </div>
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;

  .category-container {
    width: 640px;
    height: 100vh;
    border: 1px solid black;
  }

  @media screen and (max-width: 640px) {
    //태블릿
    .category-container {
      width: 100%;
    }
  }
  /* @media screen and (max-width: 375px) {
    //모바일
    .category-container {
      color: blue;
    }
  } */
`;

export default Category;
