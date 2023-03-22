import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'


type PostItemProps = PostFrontmatterType & { link: string }



// type PostItemProps = {
//   title: string
//   date: string
//   categories: string[]
//   summary: string
//   thumbnail: {
//     publicURL: string
//   }  
//   link: string
// }


// export type PostFrontmatterType = {
//   title: string
//   date: string
//   categories: string[]
//   summary: string
//   thumbnail: {
//     publicURL: string
//   }
// }

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}



const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 300px;
  border-radius: 5px 5px 0 0;
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  padding-top: 5px;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.4;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 4px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 400;
  color:#ffd400;
  &:first-of-type {
    margin: 2.5px 5px 2.5px 0;
  }
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -.05em;  
  opacity: 0.8;
`



const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>#{item}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem