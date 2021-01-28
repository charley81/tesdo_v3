/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React from 'react'
import Alert from './alert'
import List from './list'

const Form = () => {
  return (
    <div
      css={css`
        max-width: var(--maxWidth);
        margin: 5vh auto;

        input {
          display: inline;
        }

        button {
          display: inline;
        }
      `}
    >
      <Alert />
      <List />
      <div className="add-container">
        <input type="text" placeholder="add item" />
        <button>submit</button>
      </div>
    </div>
  )
}

export default Form
