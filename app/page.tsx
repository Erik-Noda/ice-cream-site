import Image from 'next/image'
import HeaderGlobal from './components/Header'

export default function Home() {
    return (
        <main className="bg-primary-200 h-screen">
            <HeaderGlobal />
            <div className="container mx-auto p-4 pt-6 z-10">
                <div className="relative flex justify-end mr-[-40px] mt-10">
                    <div className="flex absolute flex-col text-white  top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-44  justify-center items-center z-20">
                        <h5 className="text-lg sm:text-3xl font-fredoka">
                            Welcome to:
                        </h5>
                        <div className="flex justify-center items-center rounded-3xl p-3 bg-primary-300">
                            <h2 className="text-4xl sm:text-7xl font-fredoka ">
                                Mr.Frozen
                            </h2>
                        </div>
                    </div>
                    <div className="w-300 h-100 sm:w-400 sm:w-150 rotate-[20deg] justify-self-end z-10">
                        <Image
                            src="/cone.png"
                            alt="cone"
                            width={400}
                            height={200}
                        />
                    </div>
                </div>
                <div className="absolute top-60 right-20 sm:right-44 w-60 h-60 rounded-3xl rotate-[60deg] bg-primary-400" />
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block h-[192px] "
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="fill-[#7AA2E3]"
                        ></path>
                    </svg>
                </div>
                <div className="absolute bottom-[-180px] left-0 w-full overflow-hidden">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block h-[192px] rotate-180 "
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="fill-[#7AA2E3]"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="h-screen bg-primary-200 w-screen"></div>
        </main>
    )
}
