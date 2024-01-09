

const SearchBar = () => {
  return (
    <div>
        <div className="flex justify-center items-center w-[443px] h-20 searchbar">
            <input className="bg-transparent placeholder:text-2xl" type="text" placeholder="search" />
            <svg className="pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 text-base-content" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
    </div>
  )
}

export default SearchBar