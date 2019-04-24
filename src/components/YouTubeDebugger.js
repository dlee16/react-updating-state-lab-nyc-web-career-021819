import React from 'react';

class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleClick = () => {
        this.setState({
            settings:{
                ...this.state.settings, bitrate: 12
            }
        })
    }

    handleClick2 = () => {
        this.setState({
            settings:{
            ...this.state.settings, video: {
            ...this.state.settings.video, resolution:'720p'}
            }
        })
    }
    
    render(){
        return (
            <div>
            <button className='bitrate' onClick={this.handleClick}>Change Bitrate: {this.state.settings.bitrate}</button>
    
            <button className='resolution'onClick={this.handleClick2}> Change Resolution: {this.state.settings.video.resolution}</button>
        </div>
        )}
}

export default YouTubeDebugger;