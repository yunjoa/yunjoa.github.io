import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



type CategoryItemProps = {
  active: boolean;
}

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
  line-height:1.6;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 4px;
  padding: 2px 10px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  color: ${({ active }) => (active ? '#ffd400' : 'inherit')};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover{
    color: #ffd400;
    text-decoration:underline;
  }

  @media (max-width: 768px) {

    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList