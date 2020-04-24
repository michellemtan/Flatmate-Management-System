import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import './UserList.css'

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItems: new Map(),
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    render () {
        return (
            <Container className="UserContainer">
                 <Row className="UserListHeader">{this.props.title}</Row>
                 <Container className="UserListContainer">
                 {
                this.props.listItems.map(item => (
                    <Row className="UserListRow">
                  <label key={item} >
                    <Checkbox name={item} checked={this.state.checkedItems.get(item)} onChange={this.handleChange} />
                    {item}
                  </label>
                  </Row>
                ))
                }
                 </Container>
            </Container>
        );
    }
}