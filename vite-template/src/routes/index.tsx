import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import { Layout as LayoutSecundary } from '../layouts/marketing';
import { LayoutPrincipal as LayoutHome } from '../layouts/marketing';

import { authRoutes } from './auth';
import { authDemoRoutes } from './auth-demo';
import { componentsRoutes } from './components';
import { dashboardRoutes } from './dashboard';

const Error401Page = lazy(() => import('../pages/401'));
const Error404Page = lazy(() => import('../pages/404'));
const Error500Page = lazy(() => import('../pages/500'));

const HomePage = lazy(() => import('../pages/index'));
const CandidatosOrganizacionesPage = lazy(() => import('../pages/candidatosOrganizaciones/index'));
const IndicadoresElectoralesPage = lazy(() => import('../pages/indicadoresElectorales/index'));
const RegistroElectoralPage = lazy(() => import('../pages/registroElectoral/index'));
const ResultadosElectoralesPage = lazy(() => import('../pages/resultadosElectorales/index'));
const ResultadosElectoralesDignidadesPage = lazy(() => import('../pages/resultadosElectorales/dignidad'));
const ContactPage = lazy(() => import('../pages/contact'));
const CheckoutPage = lazy(() => import('../pages/checkout'));
const PricingPage = lazy(() => import('../pages/pricing'));

export const routes: RouteObject[] = [
  {
    element: (
      <LayoutHome>
        <Outlet />
      </LayoutHome>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      
      ...componentsRoutes,
    ],
  },
  {
    element: (
      <LayoutSecundary>
        <Outlet />
      </LayoutSecundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'candidatosOrganizaciones',
        element: <CandidatosOrganizacionesPage />,
      },
      {
        path: 'indicadoresElectorales',
        element: <IndicadoresElectoralesPage />,
      },
      {
        path: 'registroElectoral',
        element: <RegistroElectoralPage />,
      },
      {
        path: 'resultadosElectorales',
        element: <ResultadosElectoralesPage />,
      },
      {
        path: 'resultadosElectorales/dignidades',
        element: <ResultadosElectoralesDignidadesPage />,
      },
      ...componentsRoutes,
    ],
  },
  ...authRoutes,
  ...authDemoRoutes,
  ...dashboardRoutes,

  {
    path: 'checkout',
    element: <CheckoutPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
  {
    path: '401',
    element: <Error401Page />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '500',
    element: <Error500Page />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
];
