import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadown-md">
        <div className="flex space-x-2 items-center">
            <Image
                src="https://links.papareact.com/4t3"
                alt="logo"
                height={30}
                width={30}
            />
            <div>
                <h1 className="font-bold">
                    AI Image Generator Clone 
                </h1>
                <h2 className="text-xs">
                    <span className="text-orange-500">Powered by DALL·E 2, Chat GPT & Microsot Azure</span> 
                </h2>
            </div>
        </div>

        <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
            <Link
                href="https://openai.com/"
                className="px-2 font-light text-right"
            >
                OpenAI
            </Link>
            <Link
                href="https://openai.com/product/dall-e-2"
                className="px-2 font-light text-right"
            >
                DALL·E 2
            </Link>
            <Link
                href="https://github.com/Jacwilalasey/AI-Image-Generator"
                className="px-2 font-light"
            >
                Github Repo
            </Link>
      </div>
    </header>
  )
}

export default Header