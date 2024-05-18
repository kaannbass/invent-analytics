import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { App } from '../App'

const { PUBLIC_URL } = process.env

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='*' element={<PrivateRoutes />} />
          <Route path='*' element={<Navigate to='/error/404' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
