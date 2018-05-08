import React from 'react';
import DialogMUI from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class ButtonWithDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handle = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.setState({open: !this.state.open})}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                onClick={() => {
                    this.setState({open: !this.state.open});
                    this.props.deleteAction();
                }}
            />,
        ];

        return (
            <div>
                {
                    React.Children.map(this.props.children, child =>
                        React.cloneElement(child, { onClick: () => this.setState({open: !this.state.open})}))
                }
                <DialogMUI
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: !this.state.open})}
                >
                    Are you sure?
                </DialogMUI>
            </div>
        );
    }
}