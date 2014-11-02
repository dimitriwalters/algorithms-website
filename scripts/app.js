/** @jsx React.DOM */

var MenuExample = React.createClass({displayName: 'MenuExample',

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
    },

    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            React.DOM.div(null, 
                React.DOM.ul(null,  this.props.items.map(function(m, index){
        
                    var style = '';
        
                    if(self.state.focused == index){
                        style = 'focused';
                    }
        
                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:
        
                    return React.DOM.li({className: style, onClick: self.clicked.bind(self, index)}, m);
        
                }) 
                        
                ), 
                
                React.DOM.p(null, "Selected: ", this.props.items[this.state.focused])
            )
        );

    }
});

// Render the menu component on the page, and pass an array with menu options

React.renderComponent(
    MenuExample({items:  ['Home', 'Services', 'About', 'Contact us'] }),
    document.body
);