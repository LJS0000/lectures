import { Profiler } from 'react'
import './styles/globals.css'
import HomePage from './pages/HomePage'

function App() {
  const onRenderCallback = (
    id, // 프로파일러 ID (컴포넌트 이름)
    phase, // 단계: "mount" 또는 "update"
    actualDuration, // 컴포넌트를 렌더링하는 데 걸린 시간
    baseDuration, // 렌더링하는 데 예상되는 시간
    startTime, // 렌더링 시작 시간
    commitTime, // 커밋이 발생한 시간
    interactions // 상호작용 세트
  ) => {
    return
  }

  return (
    <Profiler id='App' onRender={onRenderCallback}>
      <HomePage />
    </Profiler>
  )
}

export default App
