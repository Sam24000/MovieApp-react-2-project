import "./Moviecard.css"


const Moviecard = ({ movies }) => {

    const { genre, imdb_rating, name, img_link, duration } = movies;
    // const {vote_average, title, poster_path} = movies;
    // const {imdbID, Title, Poster} = movies;

    return (
        <>
            <div className="card_container">
                <div className="card_img_container">
                    <img className="card_img" src={img_link}
                        alt="movie_card" />
                </div>
                <div className="card_details">
                    <div className="title">
                        <span> {name}</span>
                    </div>
                    <div className="genre">
                        <span> Genre : {genre}</span>
                    </div>
                    <div className="rating">
                        <span>Rating : {imdb_rating} /10 </span>

                        <span>Time : {duration} min</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Moviecard;