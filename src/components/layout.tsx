import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return <div className="container mx-auto w-4/5 mt-8">{props.children}</div>
}

export default Layout
