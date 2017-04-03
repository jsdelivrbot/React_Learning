/**
 * Created by ZeyuWang on 02/04/2017.
 */
import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
          <div>
              <ul className="col-md-4 list-group">
                  {this.props.videos.map((video)=>{
                      return <VideoListItem
                          onVideoSelect = {this.props.onVideoSelect}
                          key={video.etag}
                          video={video}/>
                  })}
              </ul>
          </div>
        );
    }
}

export default VideoList;