import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo(a) ao HQ Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar o seu perfil! Ah, você
          pode editar essa informaçõs depois.
        </Text>

        <MultiStep size={4} currentStep={1} />

        <Form as="form">
          <label>
            <Text size="sm">Nome do usuário</Text>
            <TextInput prefix="hq.com/" placeholder="seu-usuário" />
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="seu nome" />
          </label>

          <Button type="submit">
            Próximo Passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
