/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import Alert from './alert'
import List from './list'

const Form = ({
  handleSubmit,
  todo,
  setTodo,
  alert,
  list,
  removeAlert,
  deleteItem,
  editItem,
}) => {
  return (
    <div
      css={css`
        max-width: var(--maxWidth);
        margin: 5vh auto;
        padding: 1rem;

        input {
          display: inline;
          border: none;
          border-bottom: 1px dotted var(--colorMed);
          font-family: var(--fontFamily);
        }

        button {
          display: inline;
          margin-left: 1rem;
          border: transparent;
          background: transparent;
          font-family: var(--fontFamily);
          font-size: 1.1rem;
        }

        .alert-div {
          display: fixed;
          height: 2rem;
        }
      `}
    >
      <div className="alert-div">
        {alert.show && (
          <Alert list={list} removeAlert={removeAlert} alert={alert} />
        )}
      </div>

      <List list={list} deleteItem={deleteItem} editItem={editItem} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add item"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form
