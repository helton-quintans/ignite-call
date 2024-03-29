import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
// import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { signIn, useSession } from 'next-auth/react'
import { ArrowRight, Check } from 'phosphor-react'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  console.log(session)

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  // async function handleRegister(data: RegisterFormData) {}

  return (
    <>
      {/* <NextSeo title="Conectar com Google Calendar | Hq Call" /> */}

      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedIn ? (
              <Button>
                Conectado <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  signIn('google')
                }}
              >
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar
            </AuthError>
          )}

          <Button disabled={!isSignedIn}>
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
