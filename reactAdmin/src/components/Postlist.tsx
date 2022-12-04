import React from 'react';
import { List, Datagrid, TextField, DateField,EditButton, DeleteButton } from 'react-admin'

const Postlist = (props: any) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='title'></TextField>
            <DateField source='publishedAt'></DateField>
            <EditButton to='/posts'></EditButton>
            <DeleteButton to='/posts'></DeleteButton>
        </Datagrid>
    </List>)
}

export default Postlist