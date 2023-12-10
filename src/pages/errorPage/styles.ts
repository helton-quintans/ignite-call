import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  margin: 'auto',
  padding: '0 $4',
  borderRadius: '8px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

export const Header = styled('div', {
  maxWidth: 480,

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})
