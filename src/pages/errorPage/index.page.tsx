import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Header } from './styles'

const ErrorPage = () => {
  return (
    <Container>
      <Image
        src="/caminho/para/sua/imagem.png"
        alt="Erro"
        width={300}
        height={200}
      />
      <Header>
        <Heading as="h2">Erro de Permissão</Heading>
        <Text>
          Você precisa permitir o acesso ao Google Calendar. Por favor, consulte
          a documentação para obter mais informações.
        </Text>
      </Header>
    </Container>
  )
}

export default ErrorPage
