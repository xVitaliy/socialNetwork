import s from './Posts.module.css'

const Posts = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG3EoDb1__ScyqlG6FetIP-uHBiPyUQadhpkdSRoCc8pNQiQp8ww3Rn1_EHzIovq5cpA&usqp=CAU"
                alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Posts