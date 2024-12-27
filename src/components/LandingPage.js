export default function LandingPage() {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center">
        <header className="flex items-center justify-between w-full px-8 py-4">
          <h1 className="text-2xl font-bold text-black font-sf"> WATCH</h1>
        </header>
        
        <main className="flex flex-col mt-20 ">
          <h2 className="text-2xl font-xl text-customText font-sf mb-4">
            Apple Watch Studio
          </h2>
          <h1 className="text-6xl font-semibold text-customText leading-[1.0625]">
            Choose a case. <br /> Pick a band. <br /> Create your own style.
          </h1>
          <button className="mt-8  px-4 py-2 w-fit bg-primaryBlue text-white text-xl  rounded-full shadow-lg hover:bg-blue-600 transition-all ">
            Get started
          </button>
        </main>

        <footer className="mt-20">
          <div className="w-96 max-h-full relative">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <img className="text-white text-[6rem] font-bold font-sf" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_SR_S10_VW_PF+watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MWgzUlBDUHFLc09nNXp6YkQ2R2tRL1RwbzZSQ0tpNzdwS3JnYnpSRUcvTXVRKzVvdStuNEE3QjhjNnFmSVlaNnNTU1hrbSt5WFBRMjNsZCtEVUw5TXU5KzR1U0d0Tzdxc2ZyRVJTVEdVeUNoSHlqYUY2YWdsek45M29HTWxyVHg3cVVWKy9mc1QvMlNKZE1qRlB3eWRiRzkvZXlCQlFYVjFWeDBTaHJiMmNSTFJZZHF1QlM2K3lCS2sxQk9FZlF2eVVkZTl0U25zSlJrc3dDbC8zcG02UQ"></img>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  