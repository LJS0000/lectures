import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [isMemo, setIsMemo] = useState(false)
  const [filterConditions, setFilterConditions] = useState({
    category: '전체',
    order: '',
    dateStart: '',
    dateEnd: '',
  })

  const CATEGORY = ['전체', '식료품', '의류', '교통비']
  const FILTER = [
    '등록순',
    '최신순',
    '오래된 순',
    '가격 높은 순',
    '가격 낮은 순',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      budget: formData.get('budget'),
      category: formData.get('category'),
      date: formData.get('date'),
      memo: formData.get('memo'),
      comments: formData.get('comments'),
    }

    setItems([data, ...items])
    e.target.reset()
  }

  const handleFilter = (id, value) => {
    setFilterConditions({ ...filterConditions, [id]: value })
  }

  const applyFilter = () => {
    let filteredItems = [...items]

    if (filterConditions.category !== '전체') {
      filteredItems = filteredItems.filter(
        (item) => item.category === filterConditions.category
      )
    }

    if (filterConditions.dateStart) {
      filteredItems = filteredItems.filter(
        (item) => new Date(item.date) >= new Date(filterConditions.dateStart)
      )
    }
    if (filterConditions.dateEnd) {
      filteredItems = filteredItems.filter(
        (item) => new Date(item.date) <= new Date(filterConditions.dateEnd)
      )
    }

    switch (filterConditions.order) {
      case '등록순':
        filteredItems = [...items]
        break
      case '최신순':
        filteredItems.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case '오래된 순':
        filteredItems.sort((a, b) => new Date(a.date) - new Date(b.date))
        break
      case '가격 높은 순':
        filteredItems.sort((a, b) => b.budget - a.budget)
        break
      case '가격 낮은 순':
        filteredItems.sort((a, b) => a.budget - b.budget)
        break
      default:
        break
    }

    return filteredItems
  }

  const filteredItems = applyFilter()

  return (
    <main className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__group'>
          <label htmlFor='name' className='form__label'>
            이름
          </label>
          <input type='text' id='name' name='name' className='form__input' />
        </div>

        <div className='form__group'>
          <label htmlFor='budget' className='form__label'>
            가격
          </label>
          <input
            type='number'
            id='budget'
            name='budget'
            className='form__input'
          />
        </div>

        <div className='form__group'>
          <label htmlFor='category' className='form__label'>
            유형
          </label>
          <select id='category' name='category' className='form__select'>
            {CATEGORY.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className='form__group'>
          <label htmlFor='date' className='form__label'>
            구입 날짜
          </label>
          <input type='date' id='date' name='date' className='form__input' />
        </div>

        <div className='form__group form__group--memo'>
          <label htmlFor='memo-toggle' className='form__label'>
            메모
          </label>
          <div className='form__memo'>
            <input
              type='checkbox'
              id='memo-toggle'
              className='form__checkbox'
              onChange={() => setIsMemo(!isMemo)}
            />
            <label htmlFor='memo-toggle' className='form__checkbox-label'>
              메모 작성
            </label>
            <input
              type='text'
              id='memo'
              name='memo'
              className='form__input form__input--memo'
              disabled={!isMemo}
            />
          </div>
        </div>

        <div className='form__group'>
          <label className='form__label'>재구매 의사</label>
          <div className='form__options'>
            <input
              type='radio'
              id='comments-yes'
              name='comments'
              value='yes'
              className='form__radio'
            />
            <label htmlFor='comments-yes' className='form__radio-label'>
              한다
            </label>
            <input
              type='radio'
              id='comments-no'
              name='comments'
              value='no'
              className='form__radio'
            />
            <label htmlFor='comments-no' className='form__radio-label'>
              안한다
            </label>
          </div>
        </div>

        <button type='submit' className='form__submit'>
          저장
        </button>
      </form>

      <div className='filter'>
        <select
          className='filter__category'
          id='category'
          onChange={(e) => handleFilter(e.target.id, e.target.value)}
        >
          {CATEGORY.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className='filter__order'
          id='order'
          onChange={(e) => handleFilter(e.target.id, e.target.value)}
        >
          {FILTER.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <div className='filter__date'>
          <input
            type='date'
            className='filter__date-start'
            id='dateStart'
            placeholder='시작 기간'
            onChange={(e) => handleFilter(e.target.id, e.target.value)}
          />
          <input
            type='date'
            className='filter__date-end'
            id='dateEnd'
            placeholder='끝 기간'
            onChange={(e) => handleFilter(e.target.id, e.target.value)}
          />
        </div>
      </div>

      <ul className='item-list'>
        {filteredItems.map((item, index) => {
          return (
            <li key={index} className='item-list__item'>
              <span className='item__name'>{item.name}</span>
              <span className='item__budget'>{item.budget}</span>
              <span className='item__category'>{item.category}</span>
              <span className='item__date'>{item.date}</span>
              <span className='item__memo'>{item.memo}</span>
              <span className='item__comments'>{item.comments}</span>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
