import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        hello header
      </header>
      <main>
          <Outlet />
      </main>
      <footer>
        hello footer
      </footer>
    </>
  )
}

export default Layout