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
    remove: function () {
        /*Conexión atraves de la propiedad onRemove de de los dos comonentes Comida y ListaComida*/
        this.props.onRemove(this.props.index);
    },
    render: function () {
        return(
            <div className="comida">
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Posición <i>{this.props.children}</i>
                </p>
                <div>
                    <input onChange={this.handleLike} defaultChecked={this.state.like} type="checkbox" className="glyphicon glyphicon-heart heart"></input>
                    <br/>
                    Me Gusta: <b>{String(this.state.like)}</b>
                </div>
                <div>
                    <div className="glyphicon glyphicon-trash red" onClick={this.remove}></div>
                </div>
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
    add: function (comida) {
        var nuevaComida = this.refs.nuevaComida.value;

        if(nuevaComida == ""){
            if(typeof comida == 'undefined'){
                nuevaComida = "Nueva comida";
            }
            else {
                nuevaComida = comida;
            }
        }
        var arr = this.state.comidas;
        arr.push(nuevaComida);
        /*Redibujamos el DOM con el metodo setState e igualamos el nuevo arr a comidas*/
        this.setState({comidas: arr});
        /*Vaciamos el input al agregar la comida*/
        this.refs.nuevaComida.value = "";

    },
    remove: function (i) {
        var arr = this.state.comidas;
        arr.splice(i,1);
        /*Redibujamos el DOM con el metodo setState e igualamos el nuevo arr a comidas*/
        this.setState({comidas: arr});
    },
    eachItem: function (comida,i) {
        console.log(comida,i);
        return(
            <Comida key={i}
                    index={i}
                    nombre={comida}
                    onRemove={this.remove}>
                {i+1}
            </Comida>
        )
    },
    handleKeyDown: function (e) {
        if(e.charCode === 13)
        {
            this.add();
        }
    },
    render: function () {
        return(
            <div className="centerBlock">
                <header>
                    <h1>Mis comidas favoritas</h1>
                    <i>Total: {this.state.comidas.length}</i>
                </header>
                <div className="input-group">
                    <input ref="nuevaComida" onKeyPress={this.handleKeyDown}  type="text" className="form-control" placeholder="Agregar nueva comuda..."/>
                    <span className="input-group-btn">
                        <div className="btn btn-default btn-success" onClick={this.add.bind(null, "Nueva comida")}> + </div>
                    </span>
                </div>
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