import React, { useState, useEffect } from 'react'
import Form from './components/form'
import Header from './components/header'
import { v4 as uuidv4 } from 'uuid'

const getListItems = () => {
  const list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [list, setList] = useState(getListItems())
  const [todo, setTodo] = useState('')
  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    status: '',
    msg: '',
  })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleAlert = (show = false, status = '', msg = '') => {
    setAlert({ show, status, msg })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!todo) {
      // show alert
      handleAlert(true, 'danger', 'enter a item first')
    } else if (todo && editing) {
      // handle edit
    } else {
      // add item
      const newItem = { id: uuidv4(), msg: todo }
      setList([...list, newItem])
      handleAlert(true, 'success', 'item added')
      setTodo('')
    }
  }

  return (
    <div className="container">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        alert={alert}
        handleSubmit={handleSubmit}
        list={list}
        removeAlert={handleAlert}
      />
    </div>
  )
}

export default App
