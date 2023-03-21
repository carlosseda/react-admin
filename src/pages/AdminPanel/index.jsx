import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import style from './AdminPanel.module.css'
const Table = lazy(() => import('../../components/Table'))
const Form = lazy(() => import('../../components/Form'))

export default function AdminPanel () {
  const { panel } = useParams()

  return (
    <div className={style.adminPanel}>
      <div className={style.table}>
        <Suspense fallback={<div>Loading...</div>}>
          <Table />
        </Suspense>
      </div>
      <div className={style.form}>
        <Suspense fallback={<div>Loading...</div>}>
          <Form />
        </Suspense>
      </div>
    </div>
  )
}
