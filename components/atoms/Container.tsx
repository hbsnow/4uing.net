import * as React from 'react'

const Container: React.FunctionComponent = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      max-width: 45rem;
      margin: 0 auto;
      padding: 0 1em;
    `}</style>
  </>
)

export default Container