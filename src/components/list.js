/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { MdModeEdit, MdDelete } from 'react-icons/md'

const List = ({ list }) => {
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
        return (
          <li key={item.id}>
            {item.msg}
            <div className="btn-container">
              <MdModeEdit className="icon" />
              <MdDelete className="icon" />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default List
