import { formatNumber } from '../utils/formatNumber'
import styles from '../styles/FoodCard.module.css'

const FoodCard = ({ food, buttonProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <p>{food.food}</p>
        <p>{formatNumber(food.price)}원</p>
      </div>
      <div className={styles.card__quantity__container}>
        <div className={styles.card__quantity__input}>
          <p>수량</p>
          <input type='number' value={food.quantity} readOnly />
        </div>
        {buttonProps ?? null}
      </div>
    </div>
  )
}

export default FoodCard
