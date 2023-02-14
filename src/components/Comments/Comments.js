import React from "react";
import './comments.css'
import { Comment } from "./Comment";
import profile1 from "../../assets/img/comments/profile-1.jpg"
import profile2 from "../../assets/img/comments/profile-2.jpg"
import profile3 from "../../assets/img/comments/profile-3.jpg"
import profile4 from "../../assets/img/comments/profile-4.jpg"

export const Comments = () => {
    return (
        <div className="container-comments" >
            <Comment
                img={profile1}
                nameProfile={'Jane smith'}
                description={'I really like this app, it allows me to organize my day to day'}
                time={'1 minute ago'}
                stars={[1, 2, 3, 4]}
            />
            <Comment
                img={profile2}
                nameProfile={'James Jones'}
                description={`it's great 😱😱`}
                time={'1 minute ago'}
                stars={['', '', '', '', '']}
            />
            <Comment
                img={profile3}
                nameProfile={'Wilson Taylor'}
                description={`I love my life now it's an order`}
                time={'1 minute ago'}
                stars={[1, 2, 3,]}
            />
            <Comment
                img={profile4}
                nameProfile={'Jessica Walsh'}
                description={`I feel great now I don't stress I have everything with this app and it's free <3`}
                time={'1 minute ago'}
                stars={[1, 2, 3, 4, 5]}
            />
        </div>
    )
}