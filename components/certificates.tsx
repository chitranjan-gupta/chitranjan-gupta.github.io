"use client";

import Image from "next/image";
import {
  nptelblockchain,
  medalribbon,
  spokentutorialc,
  barcode,
} from "@/assets";
import { QRCodeSVG } from "qrcode.react";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="container certificates w-full flex flex-row relative mt-10"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 h-full">
        <div className="boxTitle mb-[20px] text-center underline">
          <h2 className="bungee-tint text-2xl font-black">Certificates</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-10 p-4 lg:p-0">
          <div className="w-full lg:w-[fit-content] flex flex-col lg:flex-row items-center shadow-lg rounded-xl certificate-bg">
            <div className="p-1 px-2 lg:px-0 lg:pl-2 rounded-xl mr-0 lg:mr-10 mt-5 lg:mt-0 w-full lg:w-[fit-content] h-[310px] lg:h-[fit-content]">
              <div className="relative w-full h-[250px] lg:w-[400px] lg:h-[300px] rounded-xl">
                <Image
                  src={nptelblockchain}
                  fill
                  alt="nptel blockchain"
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="relative w-full h-[230px] lg:w-[300px] lg:h-[300px] bg-repeat-x lg:bg-repeat-y bg-top lg:bg-left bg-[length:25px_3px] lg:bg-[length:3px_25px] bg-certificate-gradient lg:bg-certificate-gradient-lg">
              <div className="absolute flex flex-row w-full lg:w-[fit-content] lg:flex-col justify-between items-center h-[fit-content] lg:h-full -translate-y-5 translate-x-0 lg:translate-y-0 lg:-translate-x-5">
                <div className="w-[40px] h-[40px] bg-white dark:bg-[#1E1E1E] rounded-full -translate-x-4 translate-y-0 lg:translate-x-0 lg:-translate-y-5"></div>
                <div className="w-[40px] h-[40px] bg-white dark:bg-[#1E1E1E] rounded-full translate-x-4 translate-y-0 lg:translate-x-0 lg:translate-y-4"></div>
              </div>
              <div className="relative flex flex-col lg:flex-row items-start justify-between">
                <div className="flex flex-row lg:flex-col items-center">
                  <div className="relative w-[220px] h-[220px] lg:w-[200px] lg:h-[190px] -ml-10 lg:ml-0">
                    <Image
                      src={medalribbon}
                      fill
                      alt="medal ribbon"
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex mb-2 ml-5 lg:ml-0 justify-self-end">
                    <QRCodeSVG
                      value={`https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS47S4441114404095491`}
                      className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bg-transparent"
                    />
                  </div>
                </div>
                <div className="block lg:flex relative lg:static w-[200px] lg:w-[0] h-[100px] lg:h-[0] self-end">
                  <Image
                    src={barcode}
                    fill
                    alt="barcode"
                    className="lg:rotate-90 -translate-y-20 translate-x-0 lg:translate-y-0 lg:translate-x-24 object-cover lg:object-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[fit-content] flex flex-col lg:flex-row items-center shadow-lg rounded-xl certificate-bg">
            <div className="p-1 px-2 lg:px-0 lg:pl-2 rounded-xl mr-0 lg:mr-10 mt-5 lg:mt-0 w-full lg:w-[fit-content] h-[310px] lg:h-[fit-content]">
              <div className="relative w-full h-[250px] lg:w-[400px] lg:h-[300px] rounded-xl">
                <Image
                  src={spokentutorialc}
                  fill
                  alt="nptel blockchain"
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="relative w-full h-[230px] lg:w-[300px] lg:h-[300px] bg-repeat-x lg:bg-repeat-y bg-top lg:bg-left bg-[length:25px_3px] lg:bg-[length:3px_25px] bg-certificate-gradient lg:bg-certificate-gradient-lg">
              <div className="absolute flex flex-row w-full lg:w-[fit-content] lg:flex-col justify-between items-center h-[fit-content] lg:h-full -translate-y-5 translate-x-0 lg:translate-y-0 lg:-translate-x-5">
                <div className="w-[40px] h-[40px] bg-white dark:bg-[#1E1E1E] rounded-full -translate-x-4 translate-y-0 lg:translate-x-0 lg:-translate-y-5"></div>
                <div className="w-[40px] h-[40px] bg-white dark:bg-[#1E1E1E] rounded-full translate-x-4 translate-y-0 lg:translate-x-0 lg:translate-y-4"></div>
              </div>
              <div className="relative flex flex-col lg:flex-row items-start justify-between">
                <div className="flex flex-row lg:flex-col items-center">
                  <div className="relative w-[220px] h-[220px] lg:w-[200px] lg:h-[190px] -ml-10 lg:ml-0">
                    <Image
                      src={medalribbon}
                      fill
                      alt="medal ribbon"
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex mb-2 ml-5 lg:ml-0">
                    <QRCodeSVG
                      value={`https://spoken-tutorial.org/software-training/test/participant/certificate/90259/3150188/`}
                      className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bg-transparent"
                    />
                  </div>
                </div>
                <div className="block lg:flex relative lg:static w-[200px] lg:w-[0] h-[100px] lg:h-[0] self-end">
                  <Image
                    src={barcode}
                    fill
                    alt="barcode"
                    className="lg:rotate-90 -translate-y-20 translate-x-0 lg:translate-y-0 lg:translate-x-24 object-cover lg:object-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
