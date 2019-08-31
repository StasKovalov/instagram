import React, { Component } from "react";
import style from "./index.module.scss";

import {connect} from "react-redux";
import { addComment } from "@redux/actionCreators";
 
class AddComment extends Component {

    state = {
        value: "",
        isValid: false,
    }

    addCommentClick = () => {
        const { username, imageId, addComment} = this.props;
        addComment(username, imageId, this.state.value);
        this.setState({value: ""})
    }

    commentOnChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className={style.addComment}>
                <textarea
                    onChange={this.commentOnChange}
                    value={this.state.value}
                    className={style.commentArea} />
                <button onClick={this.addCommentClick}>Добавить комментарий</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addComment
}

export default connect(null,mapDispatchToProps)(AddComment);