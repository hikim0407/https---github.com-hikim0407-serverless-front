import PropTypes from "prop-types";
import styles from "./Form.module.css";

function Form({}) {
    return (
    <div className={styles.modal}>
        <div className={styles.box}>
            <div>
                <input
                    placeholder="출처"
                />
                <input
                    placeholder="페이지"
                />
            </div>
            <div>
                <input
                    placeholder="문제"
                />
                <input
                    placeholder="오답"
                />
                <input
                    placeholder="오답이유"
                />
                <input
                    placeholder="정답"
                />
                <textarea placeholder="설명"></textarea>
            </div>
            <div>
                <button>닫기</button>
            </div>
        </div>
    </div>
    )
}

export default Form;