const OneAfternoon = (): JSX.Element => {
  const titleSrc = "/Design/one_afternoon/title.png"
  const fayerSrc = "/Design/one_afternoon/fayer.png"
  const homeSrc = "/Design/one_afternoon/269.png"
  const exleySrc = "/Design/one_afternoon/exley.png"
  const olinSrc = "/Design/one_afternoon/olin.png"
  const fossSrc = "/Design/one_afternoon/foss.png"
  const endSrc = "/Design/one_afternoon/end.png"
  const image1Src = "/Design/one_afternoon/image1.png"
  const image2Src = "/Design/one_afternoon/image2.png"
  const summarySrc = "/Design/one_afternoon/summary.png"

  return (
    <div className="flex flex-col space-y-16 items-center w-full pt-8">
      <img src={titleSrc} className="w-[820px]" alt="Title Page"></img>
      <img src={fayerSrc} className="w-[820px]" alt="Page 1"></img>
      <img src={homeSrc} className="w-[820px]" alt="Page 2"></img>
      <img src={exleySrc} className="w-[820px]" alt="Page 3"></img>
      <img src={olinSrc} className="w-[820px]" alt="Page 4"></img>
      <img src={fossSrc} className="w-[820px]" alt="Page 5"></img>
      <img src={endSrc} className="w-[820px]" alt="Page 6"></img>
      <img src={image1Src} className="w-[820px]" alt="Page 7"></img>
      <img src={image2Src} className="w-[820px]" alt="Page 8"></img>
      <img src={summarySrc} className="w-[820px]" alt="All Comic Images"></img>
    </div>
  )
}

export default OneAfternoon
