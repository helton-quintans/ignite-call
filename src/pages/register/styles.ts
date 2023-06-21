import { Box, Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('main', {
  // maxWidth: 572,
  width: '100vw',
  margin: '$ auto $4',
  padding: '0 $4',
  borderRadius: '8px',
  // background: 'red',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const Header = styled('div', {
  maxWidth: 480,
  padding: '0 $2',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  maxWidth: 440,
  width: '100%',
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})
