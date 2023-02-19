import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  width: 1200,
  height: '100vh',
  background: 'gray.500',
  marginLeft: 'auto',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`${Heading}`]: {
    color: 'red',
  },

  [`${Text}`]: {
    color: 'ignite.300',
  },
})

export const Preview = styled('div', {})
