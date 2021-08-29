import { ReactNode, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

import { CardContainer } from './styles'

interface CardProps {
  children: ReactNode
}
export function Card({ children }: CardProps) {
  const [openCard, setOpenCard] = useState(false)

  return (
    <CardContainer expand={openCard} onClick={() => setOpenCard(!openCard)}>
      {children}

      <FaAngleDown />
    </CardContainer>
  )
}
