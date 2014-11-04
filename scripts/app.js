/** @jsx React.DOM */

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      active: 0
    };
  },

  changeTab: function (index) {
    this.setState({
      active: index
    });
  },

  render: function () {
    var self = this;

    return React.DOM.div(null,
      React.DOM.ul(null, this.props.tabs.map(function (tab, index) {
        var style = '';

        if (self.state.active === index) {
          style = 'active';
        }

        return React.DOM.li({
          className: style,
          onClick: self.changeTab.bind(self, index)
        }, tab);
      })),

      React.DOM.p(null, 'Selected: ', this.props.tabs[this.state.active])
    );
  }
});

React.renderComponent(
  Tabs({tabs: ['Home', 'Services', 'About', 'Contact us']}),
  document.body
);