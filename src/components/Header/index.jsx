/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'wouter'

import { container, logo, list, item } from './styles'

function Header () {
  return (
    <header css={container}>
      <Link href='/'>
        <a>
          <img css={logo} src="/logo.svg" />
        </a>
      </Link>
      <nav css={list}>
        <ul>
          <li css={item}>
            <Link href='/new-goal'>
              <a>Create goal</a>
            </Link>
          </li>
          <li css={item}>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
          <li css={item}>
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
