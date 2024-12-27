"use client"
import Carousel from "@/components/Carousel";
import WatchAnimation from "@/components/animation";
import  Lottie  from "lottie-react";
import animationData from "../app/Untitled.json";
import LandingPage from "@/components/LandingPage";

const watchCases = [
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ODl3Z1Q2VWx4QjZLd3Y4U3Brb3Y0VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLV3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=N2JMZkZuSVRMU1k5eEtYeUszbHpUenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Uk1aQWFsZ01hbDB5aTlEcmNLMGo4VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLT3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S1B4aWIzTGhsMUZJUGxFWUExaHJSenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
];
const centralDial = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv";

export default function Home() {
  return (
    // <div className="bg-white min-h-screen">
    //   <div className="animation-container">
    //   <Lottie animationData={animationData} loop={true} />
    //   </div>
    //   <header className="flex items-center justify-between px-8 py-4">
    //     <h1 className="text-2xl font-bold text-black"> WATCH</h1>
    //     <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
    //   </header>
    //   <section className="text-center my-10">
    //     <h2 className="text-3xl font-semibold mb-4 text-black">Apple Watch Studio</h2>
    //     <div className="w-[90%] mx-auto">
    //       <Carousel images={watchCases} centralDial={centralDial} />
    //     </div>
    //   </section>

    //   <section className="text-center my-10">
    //     <h2 className="text-3xl font-semibold mb-4 text-black">Watch Animation</h2>
    //     <div>
    //       <img src="/Untitled.gif" alt="Watch Animation" className="mx-auto" />
    //     </div>
    //   </section>

    // </div>
    <div className="bg-white min-h-screen">
      <LandingPage />
    </div>
  );
}

