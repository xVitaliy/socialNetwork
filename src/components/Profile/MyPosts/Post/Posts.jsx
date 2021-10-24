import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG3EoDb1__ScyqlG6FetIP-uHBiPyUQadhpkdSRoCc8pNQiQp8ww3Rn1_EHzIovq5cpA&usqp=CAU"
                alt=""/>

            {props.message}
            <div>
                <span>Like: {props.likeCount ? props.likeCount : ''}</span>
            </div>
        </div>
    )
}

export default Posts