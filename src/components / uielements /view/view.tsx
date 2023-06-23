import React from 'react'
import { ViewWrapper } from './view.style'

type Props = {
  children?: React.ReactNode;
};

const View = ({children}:Props) => {
  return (
    <ViewWrapper>{children}</ViewWrapper>
  )
}

export default View;