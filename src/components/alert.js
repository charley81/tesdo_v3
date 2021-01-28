/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect } from 'react'

const Alert = ({ list, removeAlert, alert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1000)
    return () => clearTimeout(timeout)
  }, [list, removeAlert])

  return (
    <div
      css={css`
        text-align: center;

        .success {
          color: var(--colorGreen);
        }

        .danger {
          color: var(--colorRed);
        }
      `}
    >
      <p className={`alert ${alert.status}`}>{alert.msg}</p>
    </div>
  )
}

export default Alert
