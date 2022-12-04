import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const EditPost = (props: any) => {
    return (
        <Edit title='Edit a post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'></TextInput>
                <TextInput source='title'></TextInput>
                <TextInput multiline source='body'></TextInput>
                <DateInput label='Published' source='publishedAt'></DateInput>
            </SimpleForm>
        </Edit>
    )
}
export default EditPost