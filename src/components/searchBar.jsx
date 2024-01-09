

const SearchBar = () => {
  return (
    <div>
        <div className="flex justify-center items-center w-[443px] h-20 searchbar">
            <input className="bg-transparent placeholder:text-xl placeholder:font-poppins" type="text" placeholder="Search a service" />
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<path d="M25 25L17.0001 17M19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333Z" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </div>
    </div>
  )
}

export default SearchBar