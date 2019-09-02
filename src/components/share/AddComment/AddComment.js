import React, { Component } from "react";
import style from "./index.module.scss";

import { checkValidity } from "@utils";
import { ClipLoader } from "react-spinners";
import {connect} from "react-redux";
import { addComment } from "@redux/actionCreators";
 
class AddComment extends Component {

    state = {
        value: "",
        isValid: false,
        loading: false
    }

    addCommentClick = () => {
        this.setState({loading: true});
        const { username, imageId, addComment} = this.props;
        setTimeout(() => {
            addComment(username, imageId, this.state.value);
            this.setState({ value: "", isValid: false, loading: false })
        }, 650);
    }

    addCommentEnterPress = (e) => {
        if (e.key === "Enter" && checkValidity(e.target.value) ) {
            this.setState({ loading: true });
            const { username, imageId, addComment } = this.props;
            setTimeout(() => {
                addComment(username, imageId, this.state.value);
                this.setState({ value: "", isValid: false, loading: false })
            }, 650);
        }
    }

    commentOnChange = (e) => {
        const isValid = checkValidity(e.target.value)
        this.setState({ value: e.target.value, isValid });
    }

    render() {
        const {isValid, loading} = this.state;
        return (
            <div className={style.addComment}>
                <input
                    type="text"
                    onKeyPress={this.addCommentEnterPress}
                    placeholder="Добавить комментарий..."
                    onChange={this.commentOnChange}
                    value={this.state.value}
                    className={style.commentArea} />
                <button disabled={!isValid} className={style.buttonAdd} onClick={this.addCommentClick}>
                  {loading ? <ClipLoader color={"rgba(0, 0, 0, 0.5)"} size={15} /> : 'Опубликовать'}</button> 
            </div>
        )
    }
}

const mapDispatchToProps = {
    addComment
}

export default connect(null, mapDispatchToProps)(AddComment);