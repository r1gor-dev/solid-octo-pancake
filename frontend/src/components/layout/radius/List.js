import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getWeb, deleteWeb, toggleWeb } from "../../../actions/radius";


class List extends Component {
    static propTypes = {
        radius: PropTypes.array.isRequired,
        getWeb: PropTypes.func.isRequired,
        toggleWeb: PropTypes.func.isRequired,
        deleteWeb: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getWeb();
    };

    render() {
        return (
            <Fragment>
                <h2>Radius Webs</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>done</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.radius.map(radius => (
                            <tr key={radius.id}>
                                <td>{radius.title}</td>
                                <td>{radius.description}</td>
                                <td><input
                                    onChange={this.props.toggleWeb.bind(this, radius)}
                                    type='checkbox' defaultChecked={radius.done} /></td>
                                <td><button
                                    onClick={this.props.deleteWeb.bind(this, radius.id)}
                                    className='btn btn-danger btn-sn'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    radius: state.radius.radius
});

export default connect(mapStateToProps, { getWeb, deleteWeb, toggleWeb })(List);