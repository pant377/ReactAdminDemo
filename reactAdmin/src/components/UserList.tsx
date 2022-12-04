import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const UserList = (props: any) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='name'></TextField>
            <TextField source='email'></TextField>
            <EditButton to='/users'></EditButton>
            <DeleteButton to='/users'></DeleteButton>
        </Datagrid>
    </List>
    )    
}
export default UserList