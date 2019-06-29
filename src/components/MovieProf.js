import React, {Component} from 'react';
import AddIcon from '../assets/icons/add.svg';
import PlayIcon from '../assets/icons/play.svg';

class MovieProf extends Component {
  constructor(props){
    super(props);
  }

    render() {
        return(
            <div className="Modal-container">
                <h1 className="modal__title">
                 {this.props.movies.title || this.props.movies.name}
                </h1>
                <p className="modal__episode">
              {this.props.movie.number_of_episodes ? " Episodes: " + this.props.movie.number_of_episodes : ""}
              {this.props.movie.number_of_seasons ? " Seasons: " + this.props.movie.number_of_seasons : ""}
            </p>
            <button className="modal__btn modal__btn--red">
              <PlayIcon className="modal__btn--icon" />
              Play
            </button>
            <button className="modal__btn">
              <AddIcon className="modal__btn--icon" />
              My List
            </button>


            </div>
        );
    }
}
export default MovieProf;