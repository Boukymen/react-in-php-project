import React from "react";

export default class LikeButton extends React.Component {
    // constructor(props){
    //     super(props); // avec babel plus besoin de ca

        state = {           // ni le this.state react classic
            likes: this.props.likes || 0,
            isLiked: this.props.isLiked || false
        };

    // }
    handleClik = ()=>{
        // console.log(this);
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + ( isLiked ?-1 : 1);
        this.setState({likes, isLiked:!isLiked});
    }
    render(){
        // 
        return ( <button className="btn btn-link" onClick={this.handleClik}>
            {this.state.likes} &nbsp;
            <i className={this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>
            &nbsp;
            {this.state.isLiked ? "Je n'aime plus !" : "J'aime !"}
        </button>)
        // return React.createElement(
        //     'button', 
        //     {className: 'btn btn-link', onClick: this.handleClik},
        //     this.state.likes,
        //     " ",
        //     React.createElement('i', {className: this.state.isLiked ? "fas fa-thumbs-up": "far fa-thumbs-up"}),
        //     " ",
        //     this.state.isLiked ? "Je n'aime plus !": "J'aime !");
    };
}