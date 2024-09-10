export function BannerVoluntario() {
    return (
        <div className="py-14 px-12 w-full py-28">
            <div className="max-w-[1100px] mr-auto ml-auto ">
                <div className="rounded-[20px] bg-gradient-to-r from-[rgba(255,133,126,0.79)] to-[rgba(199,156,255,0.95)] py-14 px-12 text-white">
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[34px] font-bold">Become a Volunteer</div>
                        <p className="text-[23px]">Join our team of volunteers to serve our city and make global impact!</p>
                    </div>

                    <div className="mt-8 flex">
                        <button className="border-[2px] rounded-full py-[13px] px-[36px] hover:bg-white hover:scale-95 hover:text-[#1e1e1e] hover:transition-all">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}