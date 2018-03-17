import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script'

/**
 * LinkuriousGraphComponent is an .
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

export default class LinkuriousGraphComponent extends Component {
    componentDidMount() {
    }

    handleScriptLoad(){
        const ogma = new window.Ogma({graph:{nodes:this.props.nodes, edges:[{id:'edge 1',source:'1',target:'2'}]},
        container: 'graph-container'});
        ogma.setOptions({
  interactions: { zoom: { onDoubleClick: true } }
});

    }
    render() {
        const {id, style, className} = this.props;
        return (
            <div>
                <Script
                    url="https://doc.linkurio.us/ogma/latest/build/ogma.min.js"
                    onLoad={this.handleScriptLoad.bind(this)}
                />
            <div
                key={id}
                id={id}
                style={style}
                className={className}
            />
            </div>
        );
    }
}

LinkuriousGraphComponent.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    style: PropTypes.object,

    /**
     * The value displayed in the input
     */
    className: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
    /**
     *
     */
    nodes: PropTypes.array
};
