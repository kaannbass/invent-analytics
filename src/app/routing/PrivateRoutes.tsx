import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate, useParams } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { HomePage } from '../pages/home'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'

const MovieProfile: FC = () => {
  const DetailPage = lazy(() => import('../pages/detail'))
  return (
    <SuspensedView>
      <DetailPage />
    </SuspensedView>
  )
}

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route
          path='movie/:id'
          element={<MovieProfile />}
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}


export { PrivateRoutes }
