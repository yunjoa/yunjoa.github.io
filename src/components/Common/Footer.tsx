import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  // display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 18px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  a{
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    display:inline-block;
    &:hover {
      text-decoration:none;
      transform: translateY(-8px);
    }
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <a target='_blank' href='https://github.com/yunjoa/'>🙂</a>
      <a target='_blank' href='https://www.instagram.com/yun_joayo/'>🙃</a>
      <a target='_blank' href='https://gitlog-yunjoa.vercel.app/'>🙂</a>
      <a target='_blank' href='https://book-check.vercel.app/'>🙃</a>
    </FooterWrapper>
  )
}

export default Footer