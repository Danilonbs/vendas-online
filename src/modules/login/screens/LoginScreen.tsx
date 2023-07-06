
import { useState } from "react"
import Button from "../../shared/buttons/button/button"
import Input from "../../shared/inputs/input/input"
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles"

const LoginScreen = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setUsername(event.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log ({
      username, password 
    })
  }

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer >
          <LogoImage src="./logo.png"/>
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUsername} value={username} />
          <Input type="password"  title="SENHA" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  )
}

export default LoginScreen