import React, { Component } from 'react';
import './Modal.scss';

class ReModal extends Component {
    state = {
        title: this.props.data.title,
        content: this.props.data.content,
        author: this.props.data.author,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            title: '',
            content: '',
            author: ''
        });
        this.props.close();
    };
    handleChange = (event) => {
        const { target: { name, value } } = event
        this.setState({ [name]: value })
    };
    handleUpdate = (event) => {
        event.preventDefault();
        this.props.onUpdate(this.props.data.index, this.state);
        this.setState({
            title: '',
            content: '',
            author: ''
        });
        this.props.reclose();
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.data.title,
            content: nextProps.data.content,
            author: nextProps.data.author,
        });
    }

    handleRemove = () => {
        console.log(this.props.data.index)
        this.props.onRemove(this.props.data.index);
        this.props.reclose();
    }

    render() {
        const { reOpen, reclose } = this.props;

        return (
            <React.Fragment>
                {
                    reOpen ?
                        <React.Fragment>
                            <div className="Modal-verlay" onClick={reclose} />
                            <div className="Modal">
                                <h1 className="title">메모를 기록하세요!</h1>
                                <form onSubmit={this.handleUpdate}>
                                    <div className="content">
                                        <h4>
                                            <input type="text" placeholder="아이디를 입력하세요"
                                                name="author" value={this.state.author}
                                                onChange={this.handleChange}></input>
                                        </h4>
                                        <br />
                                        <h4>
                                            <input type="text" placeholder="제목을 입력하세요"
                                                name="title" value={this.state.title}
                                                onChange={this.handleChange}></input>
                                        </h4>
                                        <textarea name="content" value={this.state.content}
                                            onChange={this.handleChange}>
                                        </textarea>
                                    </div>
                                    <div className="button-wrap">
                                        <button type="submit">
                                            <p>수정하기</p>
                                        </button>
                                        <button type="button" onClick={this.handleRemove}>
                                            <p>삭제하기</p>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </React.Fragment> : null
                }
            </React.Fragment>
        );
    }
}

export default ReModal;