
import { connect } from 'react-redux'
import Counter from '../pages/components/option2'
import actions from '../store/action/action';
//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    console.log(state.todos.count);
    return {
        count: state.todos.count
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args))
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)