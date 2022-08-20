//Imports
import type { AppProps } from 'next/app'
import { ThemeGlobal } from '../styles/theme.context';
import 'antd/dist/antd.css'

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// añado la librería de iconos
library.add(fas as any) 

// Layouts
import { LayoutAuth } from '@shared/layouts/LayoutAuth'
import { LayoutMain } from '@shared/layouts/LayoutMain/Layout.component';
import { NextPage } from 'next';
import { CartProvider } from '@shared/context/cart.provider';

//layouts
const layouts: any = {
  L1: LayoutAuth,
  L2: LayoutMain
}

type TAppPropsWithCustomProps = AppProps & {
  Component: NextPage & {
    layout : string
    sidebars: boolean
  }
} 

function MyApp({ Component, pageProps }: TAppPropsWithCustomProps) {
  const CurrentLayout = layouts[Component?.layout || 'L1']

  return (
    <ThemeGlobal>
      <CartProvider>
        <CurrentLayout sidebars={Component.sidebars}>
              <Component {...pageProps} />
        </CurrentLayout>
      </CartProvider>
    </ThemeGlobal>
  )
}

export default MyApp
