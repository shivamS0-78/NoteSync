import { addTodo} from '../redux/todosSlice';
import { useDispatch } from 'react-redux';

const DialogBox = ({info , onClose}) =>{
    const dispatch = useDispatch();
    return(
        <div>
            <button
             onClick={() => {    
                dispatch(addTodo({
                    title:info.title,
                    _id : info._id,
                }));
                onClose();
            }}
            >ADD AS TODO</button>
            <button
            onClick={onClose}
            >ADD AS NOTES</button>
        </div>
    )
}
export default DialogBox;