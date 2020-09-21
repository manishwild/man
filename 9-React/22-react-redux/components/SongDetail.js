import React from "react";
import {connect} from "react-redux"

class SongDetail extends React.Component{
    render(){
        if (this.props.selectedSong) {
            return(
        <div className="col-md-6">
        <h3>Song Detail</h3>
        <p>Song Title:{this.props.selectedSong.title}</p>
        <p>Song Duration:{this.props.selectedSong.duration}</p>
        </div>
        )
        } else {
            return( 
            <div className="col-md-6">
                <h3>No song is selected</h3>
            </div>
            ) 
        }
        
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return({selectedSong:state.selectedsong})
}
export default connect(mapStateToProps)(SongDetail)