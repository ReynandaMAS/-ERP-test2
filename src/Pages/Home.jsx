import { useState } from "react";
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/pricingCard";

import LoginModal from "../Components/loginModal";
import Contact from "../Components/Contact";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar func={setOpen} />
      <div className="flex justify-end md:mr-[250px] mt-[130px]">
        <p className="w-[690px] text-xl text-center leading-loose text-slate-600 font-medium">
          Each app simplifies a process and empowers more people. Imagine the
          impact when everyone gets the right tool for the job, with perfect
          integration.
        </p>
      </div>
      <div className="mt-[130px] ml-16">
        <p className="text-2xl italic font-medium text-slate-700">
          " All your business on one platform. Simple, efficient, yet
          affordable! "
        </p>
      </div>
      <div className="relative">
        <img
          className="xl:ml-20 mt-[100px] w-[350px] hidden md:flex"
          alt="gambar"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTo-ndaFRERDQuxK0wRRBClKq5wD01WTUCFT7OZQ0WbcPunZfS8"
        />
        <div className="absolute bottom-[-50px] right-0 w-[500px] md:w-[700px] -z-10">
          <img alt="background-2" src="/Asset 3.PNG" />
        </div>
      </div>
      <div id="about" className="mt-[80px] relative">
        <img
          className="w-full h-[400px]"
          alt="aboutus"
          src="https://newrelic.com/sites/default/files/2021-04/good-programmer-banner-final.jpg"
        />
        <p className="md:text-8xl text-7xl font-bold absolute top-[0px] md:top-[150px] md:left-[500px] text-white tracking-wide">
          ABOUT US
        </p>
      </div>
      <div className="text-center mt-20 text-2xl font-extrabold text-slate-500">
        THE PEOPLE , OUR COMMUNITY
      </div>
      <div className="mx-10 text-center mt-10 text-2xl font-semibold text-slate-500 leading-relaxed">
        We are a technology service provider company located in Jakarta, with 4
        branch offices in Indonesia, Singapore, Hong Kong and America. We have
        high determination, commitment and understanding in providing technology
        services that can help your business reach the optimal stage and provide
        a strong basis for decision making.
      </div>
      <div className="flex flex-col md:flex-row mt-20 bg-[#0c5394]">
        <div className="flex-1">
          <img
            className="w-[700px]"
            alt="aboutus2"
            src="https://offers.mas-software.com/hubfs/MASERP-mockup.png"
          />
        </div>
        <div className="flex-1 text-white p-10">
          <div className="text-4xl font-extrabold">
            Mengapa Anda perlu menggunakan perangkat lunak ERP kami?
          </div>
          <div className="text-2xl mt-10 leading-relaxed">
            Perangkat lunak ERP adalah perangkat lunak bisnis yang dapat
            digunakan dalam berbagai jenis industri mulai dari manufaktur,
            distributor, ritel, minyak dan gas, pertambangan, medis, dan
            lain-lain. Manfaat yang dapat diperoleh oleh bisnis Anda:
          </div>
          <div>
            <ul className="list-disc text-2xl mt-10 leading-relaxed">
              <li>
                Data terintegrasi antara departemen-departemen dan terpusat
                dalam satu sistem. Dapat digunakan oleh departemen produksi,
                gudang, penjualan, pengadaan, akuntansi, keuangan, pajak, dan
                lain-lain.
              </li>
              <li>
                Automatisasi proses kerja sehingga tidak perlu ada penginputan
                data ganda yang berulang, yang mengurangi kesalahan manusia.
              </li>
              <li>
                Automatisasi proses kerja sehingga tidak perlu lagi melakukan
                penginputan data ganda berulang, yang dapat mengurangi kesalahan
                manusia.
              </li>
              <li>
                Perangkat lunak ERP menghemat biaya karena hanya memerlukan satu
                sistem untuk semua departemen dalam perusahaan..
              </li>
              <li>
                Meningkatkan keamanan data karena memiliki pengaturan hak akses
                dan persetujuan yang terkontrol.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="pricing" className="mt-10 relative">
        <img
          className="w-full h-[200px]"
          alt="background-1"
          src="/Asset 4.PNG"
        />
        <p className="md:text-8xl text-7xl font-bold absolute top-0 md:top-[50px] md:left-[500px] text-white tracking-wide">
          PRICING
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between m-10 gap-5">
        <PricingCard />
      </div>
      <div className="text-2xl text-center leading-relaxed">
        <div>
          All our plans include <b>unlimited support, hosting</b> and{" "}
          <b>maintenance</b>.<br />
          With no hidden costs, no limit on features or data: enjoy real
          transparency!
        </div>
        <div className="mt-5">
          (*) The discount is valid for 12 months, for initial users ordered.
          <br />
          (**) Cost for Ryn.sh hosting not included.
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-2xl border py-5 px-10 bg-[#f3f4f6] text-[#0c5394] font-bold shadow-sm rounded-xl mt-10">
          Schedule a demo
        </button>
      </div>
      <Contact />
      <div className="text-xl text-center bg-blue-900 text-white py-5">
        Copyright © 2024 RYN Indonesia. All Rights Reserved.
      </div>

      <LoginModal show={open} funcShow={setOpen} />
    </>
  );
  // Reynanda Mayuda Atila Surya
}
