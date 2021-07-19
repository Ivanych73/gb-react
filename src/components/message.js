import './message.css';

function Message(props) {
    return (
        <div className='message'>
            {props.messsageText}
        </div>
    )
}

export default Message;