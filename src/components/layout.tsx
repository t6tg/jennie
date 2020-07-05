import React, { ReactNode } from "react"
import Navbar from "./navbar"

interface Props {
  children: ReactNode
  tag: string
}

const Layout = (props: Props) => {
  return (
    <html lang="en">
      <div className="container mx-auto w-4/5 mt-2 xl:mt-8">
        <Navbar tag={props.tag} />
        {props.children}
      </div>
    </html>
  )
}

export default Layout
