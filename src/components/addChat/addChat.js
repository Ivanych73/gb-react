import { TextField, Button, useTheme, Grid } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux"
import { createAddChatAction } from "../../store/chats/actions"
import ChatList from '../chatsPage/chatList/chatList'
import faker from 'faker'
import './addChat.css'

function AddChat(props) {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const addNewChat = () => {
        dispatch(createAddChatAction({name:value, avatar: faker.image.avatar(),}));
        alert(`Добавлен новый чат ${value}`)
        setValue('');
    }
    const inputRef = useRef(null);
    useEffect(() => {
        if (value === '')
        inputRef.current?.focus();
      }, [value]);
    return (
        <div className="wrapper">
            <Grid container spacing = {3}>
                <Grid className="cell" item xs={12}>
                    <h1>Добавление нового чата</h1>
                </Grid>
                <Grid className="cell" item xs={9}>
                    <TextField
                        style={{width: '60%'}}
                        label="Введите название нового чата"
                        variant="outlined" 
                        onChange = {handleChange}
                        value={value}
                        inputRef={inputRef}
                    >
                    </TextField>
                </Grid>
                <Grid className="cell" item xs={3}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick = {addNewChat}
                        disabled = {value === ''}
                    >
                    Создать чат
                    </Button>
                </Grid>
            </Grid>
            <ChatList />
        </div>
    )
}

export default AddChat