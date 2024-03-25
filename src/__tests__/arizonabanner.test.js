import { createRoot } from 'react-dom/client'
import { ArizonaBanner } from '../index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(<ArizonaBanner />)
})
