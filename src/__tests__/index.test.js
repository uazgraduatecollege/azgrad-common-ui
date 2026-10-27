import {
  ArizonaBanner,
  Footer,
  GradLockupBlue,
  GradLockupFullBlue,
  GradLockupFullWhite,
  Logo,
  SearchForm
} from '../index'

it('exports the documented public API', () => {
  expect(ArizonaBanner).toBeTypeOf('function')
  expect(Footer).toBeTypeOf('function')
  expect(Logo).toBeTypeOf('function')
  expect(SearchForm).toBeTypeOf('function')
  expect(GradLockupBlue).toMatch(/^data:image\//)
  expect(GradLockupFullBlue).toMatch(/^data:image\//)
  expect(GradLockupFullWhite).toMatch(/^data:image\//)
})
