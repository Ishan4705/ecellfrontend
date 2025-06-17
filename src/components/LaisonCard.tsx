import Image from "next/image"

const LaisonCard = ({ img, name, surname, role }: { img: string, name: string, surname: string, role: string }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-cta/50 p-3 rounded-[3rem] min-w-70">
            <div>
                <Image src={img} alt={name} width={250} height={250} />
            </div>
            <h1 className="text-5xl font-extrabold">{name}</h1>
            <h2 className="text-3xl font-semibold">{surname}</h2>
            <div className="bg-primary text-cta text-xl font-bold py-1 px-4 rounded-full my-3">{role}</div>
        </div>
    )
}

export default LaisonCard
