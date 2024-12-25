import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-lamlibColor3 even:bg-lamlibColor4 text-white p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 text-black rounded-full">2024/25</span>
                <Image src={"/icon/more.png"} alt="The More Icon" width={20} height={20}/>
            </div>
                <h1 className="text-2xl font-semibold my-4">1,234</h1>
                <h2 className="text-sm font-medium capitalize text-gray-200">{type}s</h2>
        </div>
    )
}

export default UserCard;