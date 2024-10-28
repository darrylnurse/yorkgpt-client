export default function ChatBubble ({text, role}) { // t/i here
    return (
        <li className={'chat-row'}>
            <div
                className={'bubble'}
                style={{
                    alignSelf: role === 'user' ? 'end' : 'start',
                    backgroundColor: role === 'user' ? 'lightblue' : 'lightgreen',
                }}
            >{text}</div>
        </li>
    )
}