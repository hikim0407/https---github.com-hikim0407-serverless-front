import PropTypes from "prop-types";
import styles from "./Review.module.css";

function Review({reference, page, problem, error, reason, correct, descript}) {
    return (
    <div className={styles.review}>
        <div>
            <p className={styles.reference}>{reference}</p>
            <p className={styles.page}>{page}</p>
        </div>
        <div>
            <p><b>Q.</b> {problem.length > 235 ? `${problem.slice(0,235)}...` : problem}</p>
            <p><b>오답</b> : {error}</p>
            <p><b>오답이유</b> : {reason}</p>
            <p><b>정답</b> : {correct}</p>
            <p><b>설명</b> : {descript}</p>
        </div>
    </div>
    )
}

Review.propTypes = {
    reference : PropTypes.string.isRequired,
    page : PropTypes.string.isRequired,
    problem : PropTypes.string.isRequired,
    error : PropTypes.string.isRequired,
    reason : PropTypes.string.isRequired,
    correct : PropTypes.string.isRequired,
    descript : PropTypes.string.isRequired,
}

export default Review;