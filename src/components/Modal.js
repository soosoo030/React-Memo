import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    };

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

    render() {
        const { isOpen, close } = this.props;

        return (
            <React.Fragment>
                {
                    isOpen ?
                        <React.Fragment>
                            <div className="Modal-verlay" onClick={close} />
                            <div className="Modal">
                                <h1 className="title">메모를 기록하세요!</h1>
                                <form onSubmit={this.handleSubmit}>
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
                                            <p>메모 추가하기</p>
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

export default Modal;