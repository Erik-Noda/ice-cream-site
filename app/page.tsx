import Image from 'next/image'
import HeaderGlobal from './components/Header'

export default function Home() {
    return (
        <main className="bg-primary-200 h-screen overflow-auto">
            <HeaderGlobal />
            <div className="container mx-auto p-4  z-10 pt-56">
                <div className="relative flex justify-end mt-10">
                    <div className="flex absolute flex-col text-white  top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-44  justify-center items-center z-20">
                        <h5 className="text-lg sm:text-3xl font-fredoka">
                            Welcome to:
                        </h5>
                        <div className="flex justify-center items-center rounded-3xl p-3 bg-primary-300">
                            <h2 className="text-4xl sm:text-7xl font-fredoka ">
                                Mr.Frozen
                            </h2>
                        </div>
                        <div className=" flex w-2/3 flex-col mt-10 sm:flex-row justify-center items-center gap-5 ">
                            <button className="transition-colors ease-in-out duration-300 bg-primary-500 font-fredoka px-4 py-2 rounded-md sm:text-3xl hover:text-primary-300 hover:bg-white">
                                Menu
                            </button>
                            <button className="transition-colors ease-in-out duration-300 bg-primary-500 font-fredoka px-4 py-2 rounded-md sm:text-3xl hover:text-primary-300 hover:bg-white">
                                About
                            </button>
                        </div>
                    </div>
                    <div className=" relative h-[350px] w-[150px] sm:h-[450px] sm:w-[200px] md:h-[600px] md:w-[250px] z-10 rotate-[15deg] mr-14 sm:mr-32">
                        <Image
                            src="/cone.png"
                            alt="cone"
                            fill
                            className="object-cover "
                        />
                    </div>
                    <div className="absolute top-40 right-20 sm:right-48 w-36 h-36 sm:w-96 sm:h-96 rounded-3xl rotate-[60deg] bg-primary-400 z-0" />
                </div>
            </div>

            <div className="flex justify-center items-center flex-col bg-primary-200 mt-80 gap-10">
                <div className="flex relative items-center h-44 bg-red-400 w-10/12 rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Milkshakes
                    </h2>
                    <Image
                        src="/milkshake.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
                <div className="flex relative items-center h-44 bg-red-400 w-10/12 rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Cups
                    </h2>
                    <Image
                        src="/hands.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
                <div className="flex relative items-center h-44 bg-red-400 w-10/12 rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Cone
                    </h2>
                    <Image
                        src="/cupsCone.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
            </div>
            <div className="flex justify-center items-center flex-col bg-primary-200 mt-80 gap-10"></div>
        </main>
    )
}
