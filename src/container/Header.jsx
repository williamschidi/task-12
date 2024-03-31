import { HiChevronDown, HiMenu, HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Ul = styled.ul`
  width: 100%;
  background: #0b7285;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
`;
const SubNav = styled.div`
  display: none;
`;

const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2rem 0.5rem;
  width: 8rem;
  border-bottom: 0.2rem solid transparent;
  cursor: pointer;

  &:hover > ${SubNav} {
    display: block;
    margin-top: 7rem;
    margin-left: -3.2rem;
    position: absolute;

    width: 20%;
  }
`;

const UlChild = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: capitalize;
  list-style: none;
`;

const Button = styled.button`
  font-size: 0.7rem;
  color: #fff;
  background: #0c8599;
  border: none;
  cursor: pointer;
`;

function Header() {
  return (
    <Nav>
      <Ul>
        <Li>
          <span>Home </span>
          <HiChevronDown />
          <SubNav>
            <UlChild>
              <li>
                <Button>Create</Button>
              </li>
              <li>
                <Button>Edit</Button>
              </li>
              <li>
                <Button>Save</Button>
              </li>
              <li>
                <Button>Delete</Button>
              </li>
            </UlChild>
          </SubNav>
        </Li>
        <Li>
          <span>Text alignment</span>
          <HiChevronDown />
          <SubNav>
            <UlChild>
              <li>
                <Button>
                  <HiMenuAlt2 size="1.2rem" />
                </Button>
              </li>
              <li>
                <Button>
                  <HiMenu size="1.2rem" />
                </Button>
              </li>
              <li>
                <Button>
                  <HiMenuAlt3 size="1.2rem" />
                </Button>
              </li>
            </UlChild>
          </SubNav>
        </Li>
        <Li>
          <span>Text style</span>
          <HiChevronDown />
          <SubNav>
            <UlChild>
              <li>
                <Button>B</Button>
              </li>
              <li>
                <Button>I</Button>
              </li>
              <li>
                <Button>U</Button>
              </li>
            </UlChild>
          </SubNav>
        </Li>
        <Li>
          <span>Text size</span>
          <HiChevronDown />
          <SubNav>
            <UlChild>
              <li>
                <Button>Smaller</Button>
              </li>
              <li>
                <Button>Normal</Button>
              </li>
              <li>
                <Button>Larger</Button>
              </li>
            </UlChild>
          </SubNav>
        </Li>
        <Li>
          <span>Text color</span>
          <HiChevronDown />
          <SubNav>
            <UlChild>
              <li>
                <Button
                  style={{
                    backgroundColor: 'red',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: 'green',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: 'blue',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: 'yellow',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: 'black',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: 'white',
                    width: '1rem',
                    height: '1rem',
                    marginRight: '0.2rem',
                  }}
                ></Button>
              </li>
            </UlChild>
          </SubNav>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Header;
