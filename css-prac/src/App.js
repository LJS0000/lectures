import StyledComponents from './components/StyledComponents'
import Tailwind from './components/Tailwind'

function App() {
  const { pathname } = window.location

  return (
    <>
      <header
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <a
          href='/styled-components'
          style={{ color: '#0066ff', textDecoration: 'underline' }}
        >
          Styled Components page
        </a>
        <a
          href='/tailwind'
          style={{ color: '#0066ff', textDecoration: 'underline' }}
        >
          Tailwind page
        </a>
      </header>
      <main>
        {pathname === '/styled-components' && <StyledComponents />}
        {pathname === '/tailwind' && <Tailwind />}
      </main>
    </>
  )
}

export default App
