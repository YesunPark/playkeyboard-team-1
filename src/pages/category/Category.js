import styled from 'styled-components';
import CategoryNav from './CategoryNav';
import CateogryOption from './CateogryOption';

const Category = ({ activeIndex, setActiveIndex }) => {
  return (
    <CategoryContainer>
      <div className='category-container'>
        <CategoryNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <CateogryOption />
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
    color: ${({ theme }) => theme.colors.grayText};
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    .category-container {
      width: 100%;
    }
  }
`;

export default Category;
