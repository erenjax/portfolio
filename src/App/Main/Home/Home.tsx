const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen h-screen bg-customBlack text-customWhite px-32 py-16">
      <div className="flex w-full h-1/2 text-2xl justify-center">
        <p className="self-center">Emily Ren Jackson</p>
      </div>
      <div className="flex flex-row w-full h-1/2 text-lg">
        <div className="flex w-1/2 h-full rounded-xl bg-accent-blue p-8">
          <p className="self-end">All Projects</p>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row h-1/2">
            <div className="flex w-1/2 h-full bg-customWhite rounded-xl text-customBlack p-8">
              <p className="self-end">Additional</p>
            </div>
            <div className="flex w-1/2 h-full bg-accent-purple-dark rounded-xl p-8">
              <p className="self-end">About</p>
            </div>
          </div>
          <div className="flex h-1/2 w-full bg-accent-purple-light rounded-xl p-8">
            <p className="self-end">Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
