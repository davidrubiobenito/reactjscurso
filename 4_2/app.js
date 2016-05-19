var Comida = React.createClass({
    getInitialState: function () {
      // return {like:false}
      return{
          like: Boolean(this.props.like)
      }
    },
    handleLike: function () {
        this.setState({
            like: !this.state.like
        })
    },
    render: function () {
        return(
            <div className="comida">
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Comida <i>{this.props.children}</i>
                </p>
                <p>
                    <input onChange={this.handleLike} defaultChecked={this.state.like} type="checkbox" className="glyphicon glyphicon-heart glyphicon-heart-lg"></input>
                    <br/>
                    Me Gusta: <b>{String(this.state.like)}</b>
                </p>
            </div>
        )
    }
});

var ListaComida = React.createClass({
    getInitialState: function () {
        return {
            comidas: [
                'Tacos',
                'Paella',
                'Ceviche'
            ]
        }
    },
    eachItem: function (comida,i) {
        console.log(comida,i);
        return(
            <Comida key={i} index={i} nombre={comida}>
                {i+1}
            </Comida>
        )
    },
    render: function () {
        return(
            <div className="centerBlock">
                <header>
                    <h1>Mis comidas favoritas</h1>
                    <i>Total: {this.state.comidas.length}</i>
                </header>
                <div>
                    {
                        this.state.comidas.map(this.eachItem)
                    }
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <ListaComida />
    ,
    document.getElementById('container')
);