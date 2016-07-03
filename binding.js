const Binding = React.createClass({
    getInitialState: function ()
    {
        return {
            binding: 'Initial data...'
        };
    },
    refresh : function ()
    {
        this.setState({
            binding: this.refs.binding.value
        });
    },
    render : function ()
    {
        return (
            <div>
                <input
                    type="text"
                    ref="binding"
                    value={this.state.binding}
                    onChange={this.refresh}
                />
                <hr />
                <p>{this.state.binding}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Binding />,
    document.getElementById('binding')
);
