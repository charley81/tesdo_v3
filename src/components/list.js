/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { MdModeEdit, MdDelete } from 'react-icons/md'

const List = ({ list, deleteItem, editItem }) => {
  return (
    <ul
      css={css`
        margin: 2rem 0;

        li {
          display: flex;
          justify-content: space-between;
        }

        .icon {
          margin-left: 0.25rem;
          cursor: pointer;
        }
      `}
    >
      {list.map(item => {
        const { id, msg } = item
        return (
          <li key={id}>
            {msg}
            <div className="btn-container">
              <MdModeEdit className="icon" onClick={() => editItem(id)} />
              <MdDelete className="icon" onClick={() => deleteItem(id)} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default List
