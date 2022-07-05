import { Navbar } from "../Navbar";
import { Container, Content, Box, SocialMidia } from "./styles";
import socialInstagram from '../../assets/social-instagram.svg'
import socialIFacebook from '../../assets/social-facebook.svg'
import socialLinkedin from '../../assets/social-linkedin.svg'
import socialTwitter from '../../assets/social-twitter.svg'

export function Header() {
  return (
    <Container>
      <Navbar />
      <Content>
        <Box>
          <main>

            <h2>Hello World,</h2>
            <h1>I am John, 3D Illustrator</h1>
            <span>Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis <br /> bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit.</span>
            <SocialMidia>
              <img src={socialIFacebook} />
              <img src={socialLinkedin} />
              <img src={socialTwitter} />
              <img src={socialInstagram} />
            </SocialMidia>
          </main>
        </Box>
      </Content>
    </Container>
  )
}