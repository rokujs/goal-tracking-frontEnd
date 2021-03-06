/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'

import Register from '@/services/register'
import userContext from '@/context/userContext'
import { useModal } from '@/hooks/useModal'

import Modal from '@/components/Modal'
import ModalHandeError from '@/components/ModalHandeError'
import Loading from '@/components/Loading'
import Button from '@/components/Button'

import { container, input, btn } from './styles'

function FormRegister () {
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState(true)
  const [messageError, setMessageError] = useState('')
  const { setJwt, setUser } = useContext(userContext)
  const [, setLocation] = useLocation()
  const { isShowing: modal, onOpenModal, onCloseModal } = useModal()

  useEffect(() => setIsLoading(false), [])

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      onOpenModal()
      setMessageError('Password and confirm password must be the same')
      return
    }

    Register({
      username: data.username,
      password: data.password,
      email: data.email
    })
      .then(res => {
        const json = {
          jwt: res.token,
          user: res.username
        }
        setJwt(res.token)
        setUser(res.username)
        window.localStorage.setItem('user', JSON.stringify(json))
        setLocation('/')
      })
      .catch(err => {
        console.error(err)
        setMessageError(err.message)
        onOpenModal()
      })
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div css={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={input}>
          <label>
            Email
            <input
              type='text'
              placeholder='email'
              {...register('email')}
              required
            />
          </label>
        </div>
        <div css={input}>
          <label>
            UserName
            <input
              type='text'
              placeholder='username'
              {...register('username')}
              required
            />
          </label>
        </div>
        <div css={input}>
          <label>
            Password
            <input
              type='password'
              placeholder='Password'
              {...register('password')}
              required
            />
          </label>
        </div>
        <div css={input}>
          <label>
            Confirm password
            <input
              type='password'
              placeholder='Confirm password'
              {...register('confirmPassword')}
              required
            />
          </label>
        </div>
        <div css={btn}>
          <Button outline>CREATE ACCOUNT</Button>
        </div>
      </form>
      {modal && (
        <Modal onClose={onCloseModal} error>
          <ModalHandeError message={messageError} onClose={onCloseModal} />
        </Modal>
      )}
    </div>
  )
}

export default FormRegister
