"use client"

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Page(){
    return(
        <div>
            <section>
            <h1 className="text-9xl text-center font-extrabold">Suku</h1>
                <div className="p-36 justify-center">
                    <h3 className=" text-5xl font-semibold">&quot;Suku adat di Indonesia itu unik-unik!&quot;</h3>
                    <p className="text-3xl  leading-loose pt-20">Suku-suku di Indonesia mencerminkan keanekaragaman budaya yang kaya. Dari suku Jawa dengan keanggunan batik dan gamelan, hingga suku Batak dengan seni ukiran kayu yang indah, setiap suku menampilkan keunikan budaya mereka sendiri. Keanekaragaman ini menjadi salah satu aset berharga Indonesia dan merupakan pondasi dari identitas bangsa yang majemuk.</p>
                </div>
                <div className="pt-20">
                    <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    >
                        <SwiperSlide>
                            <div className="bg-white m-auto outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full  items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl ">Suku adat 1#</h1>
                                    <div className="flex text-xl">
                                    <button className="text-white bg-black outline outline-1 rounded-full  px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://awsimages.detik.net.id/community/media/visual/2021/12/16/pakaian-adat-kalimantan-barat-suku-dayak_169.jpeg?w=620"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="m-auto bg-white outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full  items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl ">Suku adat 2#</h1>
                                    <div className="flex text-xl">
                                    <button className="text-white bg-black outline outline-1 rounded-full  px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://radarmukomuko.disway.id/upload/cfa49b190579b84a607bc95d36f610bb.jpg"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white m-auto  outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full  items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl ">Suku adat 3#</h1>
                                    <div className="flex text-xl slate-400">
                                    <button className="text-white bg-black outline outline-1 rounded-full  px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://cdn-brilio-net.akamaized.net/news/2016/08/16/90797/425071-1000xauto-15-suku-indonesia-.jpg"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="main-page ">
            <div className="p-36 justify-center">
                    <h1 className="text-center text-9xl font">10 suku bangsa terbesar di Indonesia yang wajib untuk kamu tahu!</h1>
                </div>
            </section>

            <section className="content">
            <div className="justify-center p-36">
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku Jawa</h1>
                    <Image
                    src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/17/1665646634.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Suku Jawa, terbesar di Indonesia, kaya akan budaya dan tradisi. Bahasa Jawa, adat istiadat, dan seni tradisional seperti wayang kulit dan batik, menjadi ciri khas. Masyarakat Jawa juga menghargai nilai-nilai seperti kesopanan, rasa hormat, dan gotong royong. Mayoritas memeluk agama Islam, tetapi tetap mempertahankan unsur kepercayaan tradisional. Suku Jawa adalah penjaga kekayaan budaya dan warisan kearifan lokal yang penting bagi Indonesia.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku Sunda</h1>
                    <Image
                    src="https://radarlampung.disway.id/upload/6a98a07b2186a40c38eef516fd1a323b.jpeg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Suku Sunda, terutama mendiami wilayah Jawa Barat, memiliki budaya yang kaya. Bahasa Sunda, seni tradisional seperti tari jaipongan dan wayang golek, serta kepercayaan lokal seperti kejawen, merupakan bagian integral dari identitas mereka. Masyarakat Sunda juga dikenal dengan keramahan dan kearifan lokal dalam mengelola lingkungan dan sumber daya alam.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku Batak</h1>
                    <Image
                    src="https://radarmukomuko.disway.id/upload/6fe7eff27c740ffe770d146421ecc0c7.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Suku Batak, yang terutama bermukim di Sumatera Utara, memiliki budaya yang kaya dan unik. Bahasa Batak, seni ukiran kayu, dan musik gondang sabangunan adalah ciri khas mereka. Masyarakat Batak dikenal dengan tradisi adat yang kuat, seperti upacara perkawinan adat yang disebut &quot;Pesta Adat&quot;. Mereka juga memiliki kepercayaan tradisional yang melibatkan ritual untuk menghormati leluhur dan roh alam.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku Sumatera Selatan</h1>
                    <Image
                    src="https://radarmukomuko.disway.id/upload/6fe7eff27c740ffe770d146421ecc0c7.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Suku di Sumatra Selatan, terutama suku Melayu dan suku Ogan, memiliki budaya yang kaya dan beragam. Masyarakatnya terkenal dengan keahlian dalam seni ukir dan anyaman, serta tarian tradisional seperti tari Pagar Pengantin dan tari Serampang Dua Belas. Mereka juga mempertahankan tradisi adat yang kuat, termasuk dalam upacara perkawinan dan perayaan keagamaan. Suku di Sumatra Selatan juga memiliki kehidupan sosial yang beragam, dari nelayan di pesisir hingga petani di pedalaman.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku di Sulawesi</h1>
                    <Image
                    src="https://pagaralampos.disway.id/upload/07ed343a98d94a057bde2038b14b1384.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Selanjutnya di urutan keempat adalah suku yang berasal dari kawasan di Sulawesi, tidak termasuk Suku Makassar, Bugis, Minahasa, dan Gorontalo. Suku-suku Sulawesi memang memiliki populasi yang banyak jika digabungkan secara keseluruhan. Jumlah mereka sebanyak 7,634 juta jiwa atau 3,22 persen dari total penduduk Indonesia.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10">Suku di Madura</h1>
                    <Image
                    src="https://cdn-u1-gnfi.imgix.net/post/large-collectie-tropenmuseum-stierenrennen-op-het-eiland-madoera-tmnr-60048932-1-7c84ac7504.jpg?fit=crop&crop=faces%2Centropy&lossless=true&auto=compress%2Cformat&w=390&h=260"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose">Suku yang mendiami Madura, sebuah pulau di sebelah timur Jawa, dikenal sebagai suku Madura. Masyarakat Madura terkenal dengan keberaniannya, terutama dalam bidang peternakan sapi dan budaya perkelahian ayam. Mereka memiliki tradisi adat yang kuat, termasuk dalam upacara perkawinan dan acara keagamaan seperti Maulid Nabi Muhammad. Bahasa Madura dan musik tradisional seperti rebana juga merupakan bagian penting dari identitas budaya mereka.</p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10"></h1>
                    <Image
                    src=""
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose"></p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10"></h1>
                    <Image
                    src=""
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose"></p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10"></h1>
                    <Image
                    src=""
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose"></p>
                </div>
                <div className="suku">
                    <h1 className="text-5xl font-semibold pb-10"></h1>
                    <Image
                    src=""
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    <p className="text-3xl pt-10 pb-20 leading-loose"></p>
                </div>
            </div>

            </section>
        </div>
    );
}