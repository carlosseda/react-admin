import React from 'react'
import { useParams } from 'react-router-dom'
import Table from '../../components/Table'
import Form from '../../components/Form'
import style from './AdminPanel.module.css'

export default function AdminPanel () {
  const { panel } = useParams()

  return (
    <div className={style.adminPanel}>
      <div className={style.table}>
        <Table />
      </div>
      <div className={style.form}>
        <Form />
      </div>
    </div>
  )
}
