import s from './Posts.module.css'
import { useDispatch } from "react-redux";
import { incrementLikeCount } from "../../../../Redux/profile-reducer";

const Posts = (props) => {
    const dispatch = useDispatch()
    return (
        <div className={s.itemWrapper}>
            <div className={s.item}>
                <div><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG3EoDb1__ScyqlG6FetIP-uHBiPyUQadhpkdSRoCc8pNQiQp8ww3Rn1_EHzIovq5cpA&usqp=CAU"
                    alt="" /></div>

                <div>{props.message}</div>
            </div>

            <div>
                <button
                    onClick={() => dispatch(incrementLikeCount(props.id))}>Like: {props.likeCount ? props.likeCount : ''}</button>
            </div>
        </div>
    )
}

export default Posts