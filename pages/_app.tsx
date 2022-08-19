//Imports
import type { AppProps } from 'next/app'
import { ThemeGlobal } from '../styles/theme.context';

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// añado la librería de iconos
library.add(fas as any) 

// Layouts
import { LayoutAuth } from '@shared/layouts/LayoutAuth'
import { LayoutMain } from '@shared/layouts/LayoutMain/Layout.component';

//layouts
const layouts: any = {
  L1: LayoutAuth,
  L2: LayoutMain
}

function MyApp({ Component, pageProps }: AppProps) {
  // const CurrentLayout = Component?.layout ? Layouts[Component.layout] : LayoutMain
  const CurrentLayout = layouts[Component?.layout || 'L1']

  return (
    <ThemeGlobal>
      <CurrentLayout>
          <Component {...pageProps} />
      </CurrentLayout>
    </ThemeGlobal>
  )
}

export default MyApp
