import styles from '../styles/FoodForm.module.css'

const FoodForm = ({ setFoodList }) => {
  const addFood = (e) => {
    e.preventDefault()

    const food = e.target['form-input__food'].value
    const price = e.target['form-input__price'].value

    if (!food || !price) {
      alert('음식와 가격을 입력해 주세요!')
      return
    }

    setFoodList((prev) => [...prev, { food: food, price: price, quantity: 1 }])

    e.target['form-input__food'].value = ''
    e.target['form-input__price'].value = ''
  }

  return (
    <form className={styles.form} onSubmit={addFood}>
      <label className={styles.form__group}>
        <span>음식</span>
        <input type='text' id='form-input__food' />
      </label>
      <label className={styles.form__group}>
        <span>가격</span>
        <input type='number' id='form-input__price' />
      </label>
      <button type='submit' className={styles.form__button}>
        추가
      </button>
    </form>
  )
}

export default FoodForm
