// ReactDOM.render(
//     <div>
//         <h1>¡Hola Mundo!</h1>
//         <h2>¡Buen Día!</h2>
//     </div>,
//     document.getElementById('mensaje')
// );

ReactDOM.render(
    React.createElement('div', null, '¡Hola Mundo!'), document.getElementById('mensaje')
);