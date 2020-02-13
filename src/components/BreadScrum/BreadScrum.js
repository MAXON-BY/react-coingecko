import React, {Component} from 'react';
import './BreadScrum.css'
import {connect} from "react-redux";
import {congeckoGetPagination} from "../../api";
import {Link} from "react-router-dom";

class BreadScrum extends Component {

    backPage = (currentPage) => {
        this.props.congeckoGetPagination(currentPage)
    };

    render(){
        const {currentPage} = this.props;

        return (
            <div className="breadscrum">
                <Link to={`/page/${currentPage}`} onClick={ () => this.backPage(currentPage) }>Back</Link> / {this.props.id}
            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        currentPage: store.coinState.currentPage,
    }
};


export default connect(mapStateToProps, {congeckoGetPagination})(BreadScrum);