interface Props {
  children: React.ReactNode
}

export const Container = ({children}: Props) => {
  return <div
    className="container px-8 mx-auto xl:px-5 max-w-screen-xl py-2"
  >
    {children}
  </div>
}
