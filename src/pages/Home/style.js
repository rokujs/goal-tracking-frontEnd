import { css } from '@emotion/react'

export const container = css`
  min-height: 100vh;
`

export const carousel = css`
  display: flex;
  padding: 5rem 4rem;
  overflow-x: auto;
  gap: 2rem;
  height: calc(100vh - 100px);
  align-items: center;

  @media (max-width: 468px) {
    flex-direction: column;
  }
`
