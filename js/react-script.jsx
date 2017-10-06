var Carousel = React.createClass({
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
      <div>
        <div className="logo"><img src="http://www.androidtablets.net/attachments/net2-jpg.9009/"/></div>
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
                  {/* <img src={movie.poster_url}/> */}
                  <img src={'https://raw.githubusercontent.com/FEND16/movie-json-data/master/img/'+movie.poster}/>
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
      </div>
    )      
  }
});

{/* React.render(<App source="https://s3.amazonaws.com/popular-movies/movies.json" />, document.querySelector("#app")); */}
React.render(<Carousel source="https://api.myjson.com/bins/ex9pp" />, document.querySelector("#carousel"));

var AppList = React.createClass({
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
      <div className="div-master-list">
        <h4 className="title">Similar Movies</h4>
          {this.state.movies.map(function(movie) {
            return (
              <div className="item-list">
                {/* <img src={movie.poster_url}/> */}
                <img src={movie.poster_url}/>
                <div className="play"></div>
                <div className="caption-list">{movie.title}</div>
              </div>
            );
          })}
        </div>
    )      
  }
});

React.render(<AppList source="https://s3.amazonaws.com/popular-movies/movies.json" />, document.querySelector("#list"));
