import { Container, IconItem, ImgUser, IconContainer } from "./styles";
import Logo from '../../assets/Logo.png'
import chatImg from '../../assets/chat.svg'
import contactImg from '../../assets/contact.svg'
import emailImg from '../../assets/email.svg'
import plusImg from '../../assets/plus.svg'
import keypadImg from '../../assets/keypad.svg'
import userImg from '../../assets/user.svg'
import fileImg from '../../assets/file.svg'


export function Navbar() {
  return (
    <Container>
      <ImgUser>
        <img src={Logo} />
      </ImgUser>
      <IconContainer>
        <IconItem>
          <img src={userImg} />
        </IconItem>
        <IconItem>
          <div className="border"></div>
          <div className="home">
            <img src={plusImg} />
            <strong>Home</strong>
          </div>
        </IconItem>
        <IconItem>
          <img src={keypadImg} />
        </IconItem>
        <IconItem>
          <img src={chatImg} />
        </IconItem>
        <IconItem>
          <img src={fileImg} />
        </IconItem>
        <IconItem>
          <img src={emailImg} />
        </IconItem>
      </IconContainer>
    </Container>
  )
}