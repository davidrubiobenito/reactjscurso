var Saludo = React.createClass({
    render: function () {
        return(
            <div>
                <h1>¡Hola Mundo!</h1>
                <h3>Planeta tierra</h3>
                <p>¡Buen día! {this.props.nombre}
                    <br/>
                    <i>{this.props.children}</i>
                </p>
            </div>

        )
    }
});

ReactDOM.render(
    <div>
        <Saludo nombre="David Rubio"> Español </Saludo>
        <Saludo nombre="Raul Rubio"> Mexicano </Saludo>
        <Saludo nombre="Lara Rubio"> Peruano </Saludo>
    </div>
    ,
    document.getElementById('mensaje')
);