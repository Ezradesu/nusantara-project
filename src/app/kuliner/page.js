import Image from "next/image";

export default function Page(){
    return(
        <div>
            <section className="intro">
                <h1 className="text-9xl text-center">kuliner</h1>
                <div className="p-36 justify-center">
                    <h3 className=" text-5xl font-bold">"Indonesia itu seperti surga bagi pencinta makanan!"</h3>
                    <p className="text-3xl  leading-loose pt-20">Di sini, kita punya segala macam makanan enak dari Sabang sampai Merauke. Setiap sudutnya dipenuhi dengan cita rasa yang menggugah selera dan memanjakan lidah. Kekayaan rempah membuat Kuliner di Indonesia memiliki aroma dan cita rasa yang kuat.</p>
                </div>
                
                <Image
                src="https://asset.kompas.com/crops/AWXtnkYHOrbSxSggVuTs3EzQprM=/10x36:890x623/750x500/data/photo/2023/03/25/641e5ef63dea4.jpg"
                width={1000}
                height={1000}
                className="m-auto w-9/12 h-auto rounded-3xl"
                />
            </section>
            <section className="content">
                <h1 className="">"10 makanan khas Indonesia yang wajib untuk dicoba!"</h1>
            </section>
        </div>
    );
}