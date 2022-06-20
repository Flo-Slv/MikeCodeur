import {robertAlertTip} from '@mikecodeur/react-course-app/test-utils'
import chalk from 'chalk'
import {render, screen, prettyDOM} from '@testing-library/react'

//import App from '../final/05'
import App from '../final/05.bonus-1'
//import App from '../exercise/02'

test('effectue le rendu et vérifie le style', () => {
  render(<App />)
  const allContainers = screen.getAllByText(/Petit conteneur/i)

  const className = 'container'
  allContainers.forEach(container => {
    robertAlertTip(
      () => {
        expect(container).toHaveClass(className)
      },
      () =>
        `
Il manque le className "${className}" sur ce container

${chalk.reset(prettyDOM(container))}
    `.trim(),
    )
  })

  allContainers.forEach(container => {
    robertAlertTip(
      () => {
        expect(container).toHaveStyle('color: white;')
      },
      () =>
        `
Il manque le color : 'white' sur ce container

${chalk.reset(prettyDOM(container))}
    `.trim(),
    )
  })

  const small = screen.getByText(/Petit/i)
  const medium = screen.getByText(/Moyen/i)
  const large = screen.getByText(/Grand/i)

  expect(small).toHaveClass('container--small')
  expect(small).toHaveStyle('background-color: darkslateblue;')

  expect(medium).toHaveClass('container--medium')
  expect(medium).toHaveStyle('background-color: pink;')

  expect(large).toHaveClass('container--large')
  expect(large).toHaveStyle('background-color: lightgreen;')
})
