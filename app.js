var Saludo = React.createClass({
    render: function () {
        return(<h1>¡Hola Mundo!</h1>)
    }
});


ReactDOM.render(
    <div>
        <Saludo/>
        <Saludo/>
        <Saludo/>
    </div>
    ,
    document.getElementById('mensaje')
);