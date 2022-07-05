import { Container, Content, SectionOne, SectionTwo, SectionTree, SectionFour } from "./styles";
import badge1 from '../../assets/Badge.png'
import badge2 from '../../assets/Badge2.png'
import badge3 from '../../assets/Badge3.png'
import Profile from '../../assets/Profile.png'
import JohnDoe from '../../assets/JohnDoe.png'

export function Main() {
  return (
    <Container>
      <Content>
        <SectionOne>
          <img src={badge1} />
          <img src={badge2} />
          <img src={badge3} />
        </SectionOne>
        <SectionTwo>
          <img src={Profile} />
          <div className="line"></div>
        </SectionTwo>
      </Content>
      <SectionTree>
        <div className="line-sec"></div>
        <SectionFour>
          <div className="img-name">
            <img src={JohnDoe} />
          </div>
          <section className="line-section">
          <div className="line-height"></div>
          <div className="boll"></div>
          <div className="line-height"></div>
          <div className="boll"></div>
          <div className="line-height"></div>
          <div className="boll"></div>
          <div className="line-height"></div>
          <div className="boll"></div>
          </section>
          <div className="table">
          <table>
            <thead>
              <tr>
                <th>
                  <h1>
                    WORK EXPERIENCE
                  </h1>
                </th>
                <th>
                  <h1>
                    SKILL AND EXPERTISE
                  </h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h2>Creative Director</h2>
                  <p>at Fourth Compnay</p>
                  <span>2015 - Present</span>
                </td>
                <td className="column">
                  <img src="" alt="" />
                  <h2>UI Interface Design</h2>
                  <progress value='75' max='100'></progress>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h2>Creative Director</h2>
                  <p>at Fourth Compnay</p>
                  <span>2015 - Present</span>
                </td>
                <td className="column">
                  <img src="" alt="" />
                  <h2>UI Interface Design</h2>
                  <progress value='75' max='100'></progress>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h2>Creative Director</h2>
                  <p>at Fourth Compnay</p>
                  <span>2015 - Present</span>
                </td>
                <td className="column">
                  <img src="" alt="" />
                  <h2>UI Interface Design</h2>
                  <progress value='75' max='100'></progress>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </SectionFour>
      </SectionTree>
    </Container>
  )
}