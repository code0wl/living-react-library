import React, {Component} from "react";
import ListContainer from "../list_item/list_container";
import "./side_bar.css";

export default class SideBarMenu extends Component {
    constructor(props) {
        super(props);
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }

    setSelectedItem() {
        this.setState({
            selected: window.location.pathname
        });
    }

    render() {
        return this.props.components.map((component) => {
            return Object.keys(component).map((material, index) => {
                return (
                    <div key={material + index}>
                        <h6 className="material-header-group">{material}</h6>
                        <ListContainer selected={this.setSelectedItem} materials={component[material]}/>
                    </div>
                );
            });
        });
    }
}