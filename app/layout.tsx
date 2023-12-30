import './globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./components/navbar/Navbar"
import MountedClient from './components/MountedClient'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import ElementModal from './components/modals/ElementModal'
import ReduxProvider from '@/providers/ReduxProvider'
import ToastProvider from '@/providers/ToastProvider'


const newFont = Nunito({
    subsets: ['latin']
})

export default async function RootLayout({children} : {children: React.ReactNode}){
  const user = await getCurrentUser();
  return (
    <html lang="en">
        <body className={newFont.className}>
            <ReduxProvider>
            <MountedClient>
              {/* <Modal isOpen onSubmit={() => {}} onClose={() => {}} btnLabel='Register' title='Register'/>   */}
              <ToastProvider/>
              <ElementModal/>
              <LoginModal/>
              <RegisterModal/>
              <Navbar user={user}/>
            </MountedClient>
            {children}
            </ReduxProvider>
        </body>
    </html>
  )
}