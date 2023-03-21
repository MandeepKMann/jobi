import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="form wrapper">
            <form action="#">
                <div className="inputs">
                    <div className="textInput">
                        <label htmlFor="userSearch">What are you looking for?</label>
                        <input type="text" />
                    </div>
                    <div className="selectInput">
                        <label htmlFor="">Category</label>
                        <select name="" id="">
                            <option value="">Web Design</option>
                        </select>
                    </div>
                </div>
                <button type='submit'>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar;