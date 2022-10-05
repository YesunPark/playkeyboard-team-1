import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryContainer>
      <div className='category-container'></div>
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
`;

export default Category;
