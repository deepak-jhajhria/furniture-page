const Preloder = () => {
    return (
        <div className='bg-black min-h-screen w-full'>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                <div class="animate-pulse flex flex-col items-center gap-4 w-60">
                    <div>
                        <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
                        <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                    </div>
                    <div class="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div class="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div class="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}
export default Preloder
