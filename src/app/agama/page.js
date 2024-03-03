"use client"

import Image from "next/image";

export default function Page(){
    return(
        <div>
            <section>
                <h1 className="text-9xl text-center font-extrabold">Agama</h1>
                <div className="p-36 justify-center">
                    <h3 className=" text-5xl font-semibold">&quot;Agama beragam namun tetap satu!&quot;</h3>
                    <p className="text-3xl  leading-loose pt-20">Agama di Indonesia sangat beragam, termasuk Islam, Kristen, Katolik, Hindu, Buddha, dan konghucu. Mayoritas masyarakat memeluk Islam, sementara agama-agama lainnya tersebar di berbagai wilayah. Meskipun beragam, hubungan antaragama umumnya harmonis dan penuh toleransi.</p>
                </div>
            </section>

            <section>
                <div className="p-36 justify-center">
                    <h1 className="text-center text-9xl font">6 agama besar yang ada di Indonesia</h1>
                </div>
            </section>

            <section>
                <div className="justify-center p-36 text-5xl">
                    <h1>Islam</h1>
                    <h1>Kristem Protestan</h1>
                    <h1>Kristen katolik</h1>
                    <h1>Hindu</h1>
                    <h1>Buddha</h1>
                    <h1>konghucu</h1>
                </div>
            </section>
        </div>
    )
}