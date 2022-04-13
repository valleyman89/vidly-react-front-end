import _ from "lodash";
import { getGenres } from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";
import { Link } from "react-router-dom";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/list-group";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import React, { Component } from "react";
import SearchBox from "./searchBox";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    searchQuery: [],
    selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies: movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 401)
        toast.error("You are not logged in.");
      if (ex.response && ex.response.status === 404)
        toast.error(`Movie ID ${movie._id} has already been deleted.`);
      this.setState({ movies: originalMovies });
    }
  };

  handleGenres = (genre) => {
    //console.log(genre);
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
      sortColumn,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title
          .toString()
          .toLowerCase()
          .startsWith(searchQuery.toString().toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count, searchQuery } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    const { user } = this.props;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <div>
            {user && (
              <Link
                to="/movies/new"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
                New Movie
              </Link>
            )}
          </div>
          <span>Showing {totalCount} movies in the database.</span>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            currentPage={currentPage}
            itemsCount={totalCount}
            onPageChange={this.handlePageChange}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
