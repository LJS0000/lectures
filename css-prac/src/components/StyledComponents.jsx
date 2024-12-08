import styled from 'styled-components'
import chevron from '../assets/chevron.svg'
import star from '../assets/star.svg'
import starSolid from '../assets/starSolid.svg'

const StyledComponents = () => {
  return (
    <>
      <Title>Styled Components</Title>

      <DetailPage>
        <Breadcrumb>
          <p>Men</p>
          <img src={chevron} alt='chevron' />
          <p>Clothing</p>
          <img src={chevron} alt='chevron' />
          <p>Basic Tee 6-pack</p>
        </Breadcrumb>

        <Thumbnail>
          <div>
            <img src='https://picsum.photos/400' alt='thumbnail' />
          </div>
          <div>
            <img src='https://picsum.photos/300' alt='thumbnail' />
            <img src='https://picsum.photos/250' alt='thumbnail' />
          </div>
          <div>
            <img src='https://picsum.photos/450' alt='thumbnail' />
          </div>
        </Thumbnail>

        <div>
          <Description>
            <h2>Basic Tee 6-Pack</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              impedit error asperiores dolores, possimus soluta iure ipsum
              dolorem ab rem debitis minima minus, temporibus non voluptatibus
              in obcaecati cum doloremque.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <h3>Other</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              impedit error asperiores dolores, possimus soluta iure ipsum
              dolorem ab rem debitis minima minus, temporibus non voluptatibus
              in obcaecati cum doloremque.
            </p>
          </Description>

          <Cart>
            <p>$192</p>
            <Review>
              <div>
                <img src={starSolid} alt='star' />
                <img src={starSolid} alt='star' />
                <img src={starSolid} alt='star' />
                <img src={starSolid} alt='star' />
                <img src={star} alt='star' />
              </div>
              <span>117 reviews</span>
            </Review>
            <ColorContainer>
              <h4>Color</h4>
              <Color>
                <div></div>
                <div></div>
                <div></div>
              </Color>
            </ColorContainer>
            <SizeContailner>
              <div>
                <h4>Size</h4>
                <span>Size guide</span>
              </div>
              <Size>
                <div>XXS</div>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                <div>XXXL</div>
              </Size>
            </SizeContailner>
            <Button>Add to cart</Button>
          </Cart>
        </div>
      </DetailPage>
    </>
  )
}

export default StyledComponents

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
`

const DetailPage = styled.div`
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;

  > div:nth-child(3) {
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-right: 10px;
  }
`

const Breadcrumb = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;

  > p {
    margin: 0;
  }

  > img {
    width: 20px;
  }
`

const Thumbnail = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  div {
    height: 100%;
    flex: 1 1;
    border-radius: 10px;
    max-width: calc(33.33% - 7px);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    img {
      height: calc(50% - 10px);
    }
  }
`

const Description = styled.div`
  width: 70%;
  flex-wrap: wrap;
  box-shadow: 4px 0px 4px -5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    padding: 20px 0 10px 0;
  }

  ul {
    padding: 0;
  }

  li {
    margin-left: 20px;
    list-style: circle;
  }
`

const Cart = styled.div`
  width: 30%;
  flex-wrap: wrap;

  > p {
    margin: 0;
    font-size: 30px;
  }
`

const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;

  div {
    display: flex;
    > img {
      width: 16px;
      height: 16px;
    }
  }
`

const ColorContainer = styled.div`
  margin: 20px 0 24px 0;
  h4 {
    margin: 0;
  }
`

const Color = styled.div`
  display: flex;
  gap: 8px;

  > div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  > div:nth-child(1) {
    background-color: white;
    border: 1px solid #7c61f8;
  }

  > div:nth-child(2) {
    background-color: gray;
  }

  > div:nth-child(3) {
    background-color: black;
  }
`

const SizeContailner = styled.div`
  margin: 20px 0 24px 0;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h4 {
      margin: 0;
    }

    > span {
      color: #7c61f8;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`

const Size = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 10px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100%-3px);
    aspect-ratio: 1/1;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  > div:first-child {
    color: #d9d9d9;
    background-color: #f6f6f6;
    position: relative;
    overflow: hidden;
  }
  > div:first-child::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-color: transparent;
    border: 1px solid #d9d9d9;
    transform: rotate(45deg);
    transform-origin: top left;
  }
  > div:last-child {
    border: 2px solid #7c61f8;
  }
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #7c61f8;
  color: white;
  border: none;
  border-radius: 8px;
`
