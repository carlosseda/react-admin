import { Outlet, useParams } from 'react-router-dom'

import Header from '../components/Header'

export default function Layout () {
  const { panel } = useParams()
  const title = panel || 'Inicio'

  return (
    <>
      <Header title={title} />

      <main>
        <Outlet />
      </main>

    </>
  )
};
