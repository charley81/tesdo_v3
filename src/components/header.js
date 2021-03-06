/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const Header = () => {
  return (
    <header
      css={css`
        padding: 1rem;
        background-color: var(--colorPrimary);
        color: var(--colorLight);

        h1 {
          display: flex;
          align-items: center;
          max-width: var(--maxWidth);
          margin: auto;

          .icon {
            color: var(--colorSecondary);
          }
        }
      `}
    >
      <h1>
        tesdo_v3
        <AiOutlineUnorderedList className="icon" />
      </h1>
    </header>
  )
}

export default Header
