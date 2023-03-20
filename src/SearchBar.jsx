import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="form wrapper">
            <form action="#">
                <label htmlFor="userSearch">What are you looking for?</label>
                <input type="text" />
                <select name="" id=""></select>
                <label htmlFor=""></label>
                <select name="" id="">
                    <option value="">Web Design</option>
                </select>
                <button type='submit'>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar;