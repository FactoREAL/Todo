import * as React from 'react';
import { IGroupProps} from "../types";

class Group extends React.Component<IGroupProps> {
    private handlerClick = () => {
        this.props.setGroup(this.props.group.title);
    };

    public render() {
        const {group, currentGroup} = this.props;
        const css = (currentGroup === group.title) ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
        return <li className={css} key={group.id} onClick={this.handlerClick}>{group.title}</li>;
    }
}

export default Group;