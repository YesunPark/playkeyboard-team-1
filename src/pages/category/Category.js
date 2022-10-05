import styled from 'styled-components';
import CategoryTheme from './CategoryTheme';

const Category = () => {
  return (
    <CategoryContainer>
      <div className='category-container'>
        <CategoryTheme />
      </div>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;

  .category-container {
    width: 640px;
    min-height: 100vh;
    border: 1px solid black;
    color: ${({ theme }) => theme.colors.grayText};
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    .category-container {
      width: 100%;
    }
  }
`;

export default Category;
