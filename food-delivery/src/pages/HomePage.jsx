import { useState } from 'react'
import { formatNumber } from '../utils/formatNumber'
import Header from '../components/Header'
import FoodForm from '../components/FoodForm'
import FoodCard from '../components/FoodCard'
import Modal from '../components/Modal'

function HomePage() {
  const [foodList, setFoodList] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cartList, setCartList] = useState([])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const addToCart = (item) => {
    setCartList((prev) => [...prev, item])
    setFoodList((prev) => prev.filter((food) => food !== item))
    alert('장바구니에 추가되었습니다.')
  }

  const changeQuantity = (food, num) => {
    setCartList((prev) =>
      prev.map((item) => {
        if (item === food) {
          if (item.quantity + num <= 0) {
            return { ...item, quantity: 0 }
          }
          return { ...item, quantity: item.quantity + num }
        }
        return item
      })
    )
  }

  const calculateTotalPrice = () => {
    const total = cartList.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity
    }, 0)

    return formatNumber(total)
  }

  const addToCartBtn = (food) => {
    return <button onClick={() => addToCart(food)}>{'장바구니에 추가'}</button>
  }

  const changeQuantityBtn = (food) => {
    return (
      <div className='flex gap-2'>
        <button
          className='w-6 cursor-pointer bg-slate-100'
          onClick={() => changeQuantity(food, +1)}
        >
          {'+'}
        </button>
        <button
          className='w-6 cursor-pointer bg-slate-100'
          onClick={() => changeQuantity(food, -1)}
        >
          {'-'}
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='App'>
        <Header toggleModal={toggleModal} />
        <div className='flex flex-col items-center justify-center w-2/3 mx-auto'>
          <FoodForm setFoodList={setFoodList} />
          <main className='w-full'>
            {foodList.length > 0 ? (
              <ul>
                {foodList.map((food, i) => {
                  return (
                    <li key={i}>
                      <FoodCard
                        key={i}
                        food={food}
                        buttonProps={addToCartBtn(food)}
                      />
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className='mt-8 font-semibold text-center text-slate-300'>
                <p>음식 목록이 없습니다.</p>
                <p>목록을 추가해 주세요!</p>
              </div>
            )}
          </main>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} onClose={toggleModal}>
        {cartList.length > 0 ? (
          <>
            <ul>
              {cartList.map((food, i) => {
                return (
                  <li key={i}>
                    <FoodCard
                      key={i}
                      food={food}
                      buttonProps={changeQuantityBtn(food)}
                    />
                  </li>
                )
              })}
            </ul>
            <div className='flex flex-col justify-end'>
              <div className='flex justify-between text-lg font-bold'>
                <p>전체 금액</p>
                <p>{calculateTotalPrice()}원</p>
              </div>
              <div className='flex items-center justify-end gap-2 mt-4'>
                <button
                  className='w-16 p-1 rounded bg-slate-100'
                  onClick={toggleModal}
                >
                  취소
                </button>
                <button
                  className='w-16 p-1 rounded bg-slate-100'
                  onClick={() => {
                    alert('준비 중입니다.')
                    toggleModal()
                  }}
                >
                  결제
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='mt-8 font-semibold text-center text-slate-300'>
            <p>장바구니에 추가된 목록이 없습니다.</p>
          </div>
        )}
      </Modal>
    </>
  )
}

export default HomePage
