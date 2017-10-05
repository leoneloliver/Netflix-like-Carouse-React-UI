var App = React.createClass({
  getInitialState: function() {
    return {
      movies: []
    }
  },
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            movies: result.data
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <div className="div-master">
        <div className="before">
          <div className="arrow-left"></div>
        </div>
        <h4 className="title">Popular Movies</h4>
        <div className="middle">
          <div className="carrossel">
          {this.state.movies.map(function(movie) {
            return (
              <div className="item-c">
                <img src={movie.poster_url}/>
                <div className="play"></div>
                <div className="caption">{movie.title}</div>
              </div>
            );
          })}
          </div>
        </div>
        <div className="after">
          <div className="arrow-right"></div>
        </div>
      </div>
    )      
  }
});

React.render(<App source="https://s3.amazonaws.com/popular-movies/movies.json" />, document.querySelector("#app"));

