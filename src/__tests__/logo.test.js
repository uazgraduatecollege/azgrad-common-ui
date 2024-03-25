import { createRoot } from 'react-dom/client'
import { Logo } from '../index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(<Logo />)
})
