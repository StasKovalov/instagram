import React, { Component } from "react";
import style from "./index.module.scss";

import { checkValidity } from "@utils";
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
        this.setState({value: "", isValid: false})
    }

    commentOnChange = (e) => {
        const isValid = checkValidity(e.target.value)
        this.setState({ value: e.target.value, isValid });
    }

    render() {
        const {isValid} = this.state;
        return (
            <div className={style.addComment}>
                <textarea
                    placeholder="Добавить комментарий..."
                    onChange={this.commentOnChange}
                    value={this.state.value}
                    className={style.commentArea} />
                <button disabled={!isValid} className={style.buttonAdd} onClick={this.addCommentClick}>Опубликовать</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addComment
}

export default connect(null,mapDispatchToProps)(AddComment);