"use client"
import Image from "next/image";
import React, {useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';




export default function Page(){
    return(
        <div>
            <section className="intro">
                <h1 className="text-9xl text-center font-extrabold">kuliner</h1>
                <div className="p-36 justify-center">
                    <h3 className=" text-5xl font-semibold">"Indonesia itu seperti surga bagi pencinta makanan!"</h3>
                    <p className="text-3xl  leading-loose pt-20">Di sini, kita punya segala macam makanan enak dari Sabang sampai Merauke. Setiap sudutnya dipenuhi dengan cita rasa yang menggugah selera dan memanjakan lidah. Kekayaan rempah membuat Kuliner di Indonesia memiliki aroma dan cita rasa yang kuat.</p>
                </div>

                <div className="swiper pt-20">
                    <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    >
                        <SwiperSlide>
                            <div className="m-auto bg-slate-400 outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full bg-pink-500 items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl bg-violet-500">Rendang dari Padang</h1>
                                    <div className="flex text-xl slate-400">
                                    <button className="outline outline-1 rounded-full bg-green-500 px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="m-auto bg-slate-400 outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full bg-pink-500 items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl bg-violet-500">Rendang dari Padang</h1>
                                    <div className="flex text-xl slate-400">
                                    <button className="outline outline-1 rounded-full bg-green-500 px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="m-auto bg-slate-400 outline outline-1 p-5 rounded-3xl w-1/2 relative flex flex-col gap-5">
                                <div className="flex outline outline-1 p-2 rounded-full bg-pink-500 items-center justify-between">
                                    <h1 className="outline outline-1 w-fit  p-5 rounded-full text-xl bg-violet-500">Rendang dari Padang</h1>
                                    <div className="flex text-xl slate-400">
                                    <button className="outline outline-1 rounded-full bg-green-500 px-10 py-5">→</button>
                                    </div>
                                </div>
                                <Image
                                src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
                                width={1000}
                                height={1000}
                                className="m-auto w-full rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </section>
            <section className="main">
                <div className="p-36 justify-center">
                    <h1 className="text-center text-9xl font">10 makanan khas Indonesia yang wajib untuk dicoba!</h1>
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Rendang dari Padang</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Rendang adalah masakan khas Indonesia yang terdiri dari daging sapi yang dimasak dalam santan dan rempah-rempah hingga kering. Proses memasaknya memakan waktu lama untuk meresapkan bumbu dan membuat daging menjadi sangat empuk. Rendang memiliki cita rasa kaya, gurih, pedas, dan beraroma. Biasanya disajikan dengan nasi putih dan sangat populer dalam berbagai acara di Indonesia.</p>
                    <Image
                    src="https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Pempek dari Palembang</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Pempek adalah hidangan khas Palembang terbuat dari campuran daging ikan, tepung sagu, dan bumbu. Dibentuk menjadi berbagai bentuk dan disajikan dengan kuah cuko yang pedas dan asam. Biasanya dianggap sebagai camilan favorit di Indonesia.</p>
                    <Image
                    src="https://rakyatsulsel.fajar.co.id/wp-content/uploads/2024/02/pempek-palembang.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Ketoprak dari Jakarta</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Ketoprak adalah hidangan Indonesia yang terdiri dari tahu, bihun, tauge, dan lontong yang disajikan dengan kuah kacang. Biasanya ditambahkan kerupuk, mentimun, dan bawang goreng sebagai garnis. Rasanya gurih, manis, dan sedikit pedas. Populer sebagai hidangan ringan atau sarapan di Indonesia.</p>
                    <Image
                    src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/16085546/Berpotensi-Gagalkan-Diet-Ketahui-Jumlah-Kalori-Ketoprak.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Siomay dari Bandung</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Siomay Bandung adalah hidangan dim sum populer di Indonesia, terbuat dari campuran daging ikan atau ayam, udang, dan tepung tapioka yang dikukus. Biasanya disajikan dengan lontong, kentang, telur rebus, tahu, dan kubis, disiram dengan kuah kacang dan saus sambal. Rasanya gurih, segar, dan sedikit pedas.</p>
                    <Image
                    src="https://cdn0-production-images-kly.akamaized.net/XS3n0H7cxlU2uA5BLbbbt5UTGnc=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2834715/original/082188900_1561183059-shutterstock_1134726890.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Gudeg dari Yogyakarta</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Gudeg adalah hidangan khas dari Yogyakarta, Indonesia. Terbuat dari nangka muda yang dimasak dalam santan dengan tambahan gula merah, daun salam, dan rempah-rempah lainnya seperti ketumbar dan lengkuas. Gudeg memiliki tekstur yang lembut dan manis, dan biasanya disajikan dengan nasi, ayam opor (ayam rebus dalam santan), telur rebus, dan sambal goreng krecek (daging sapi kulit yang dimasak kering). </p>
                    <Image
                    src="https://akcdn.detik.net.id/visual/2022/01/03/gudeg_169.jpeg?w=720&q=90"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Nasi Liwet dari dari Solo</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Nasi liwet adalah hidangan nasi tradisional dari Jawa, Indonesia. Nasi liwet dimasak dengan santan, daun salam, lengkuas, dan garam, sehingga memiliki aroma yang khas dan rasa yang gurih. Biasanya disajikan dengan lauk-pauk seperti ayam goreng, tempe goreng, tahu goreng, telur dadar, dan sayuran rebus seperti labu siam atau daun singkong. Hidangan ini sering disajikan dalam satu wadah besar dan biasanya dimakan bersama-sama dalam satu keluarga atau kelompok. Nasi liwet merupakan salah satu hidangan yang populer di Indonesia, terutama di daerah Jawa.</p>
                    <Image
                    src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/07/14/4WsPM7j/5-resep-nasi-liwet-komplit-khas-sunda-dan-solo-dijamin-enak93.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Lumpia dari Semarang</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Lumpia Semarang adalah hidangan lumpia khas dari Semarang, Jawa Tengah, Indonesia. Terbuat dari campuran rebung, tahu, udang, dan daging yang digulung dalam kulit lumpia dan digoreng. Biasanya disajikan dengan acar timun dan saus kacang.</p>
                    <Image
                    src="https://profile.perpus.jatengprov.go.id/asset/foto_berita/resep-lumpia-semarang.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Rawon dari Surabaya</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Rawon adalah hidangan khas dari Surabaya, Jawa Timur, Indonesia. Ini adalah sup daging sapi hitam yang khas berkat penggunaan kluwek, biji hitam yang memberikan warna dan rasa khas pada hidangan ini. Biasanya disajikan dengan nasi putih, telur rebus, potongan tahu goreng, dan sambal terasi. Rawon memiliki cita rasa yang gurih, kaya rempah, dan sedikit beraroma pahit dari kluwek.</p>
                    <Image
                    src="https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2021/05/03/rawonjpg-20210503040744.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Bakso dari Malang</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Bakso Malang adalah hidangan bakso khas dari Kota Malang, Jawa Timur, Indonesia. Terkenal dengan ukuran besar, terbuat dari daging sapi cincang dan tepung tapioka, disajikan dalam kuah kaldu sapi dengan mie, irisan daun bawang, bawang goreng, dan kadang pangsit goreng. Biasanya dinikmati dengan sambal dan kecap manis.</p>
                    <Image
                    src="https://img.inews.co.id/media/1200/files/inews_new/2023/11/17/Bakso_malang.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                </div>
                <div className="justify-center p-36">
                    <h1 className="text-5xl font-semibold">Satay Lilit dari Bali</h1>
                    <p className="text-3xl pt-10 pb-20 leading-loose">Sate lilit adalah hidangan khas Bali, terbuat dari daging cincang yang dililitkan pada tusuk bambu, kemudian dipanggang. Biasanya disajikan dengan nasi putih atau lontong, serta sambal matah atau sambal kecap.</p>
                    <Image
                    src="https://cdns.klimg.com/dream.co.id/resized/640x320/news/2021/02/25/161141/sedapnya-sate-lilit-tempe-cocok-untuk-diet-210225l.jpg"
                    width={1000}
                    height={1000}
                    className="m-auto w-9/12 rounded-3xl"
                    />
                    
                    
                </div>
                
            </section>
        </div>
    );
}

function slide(){
    return(
        <div>
            <Image
            src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
            width={1000}
            height={1000}
            className="m-auto w-9/12 rounded-3xl"
            />
            <Image
            src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
            width={1000}
            height={1000}
            className="m-auto w-9/12 rounded-3xl"/>
            <Image/>
        </div>
    )
}