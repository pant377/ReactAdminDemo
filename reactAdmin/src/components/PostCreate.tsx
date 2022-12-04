import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props: any) => {
    return (
        <Create title='Create a post' {...props}>
            <SimpleForm>
                <TextInput source='title'></TextInput>
                <TextInput multiline source='body'></TextInput>
                <DateInput label='Published' source='publishedAt'></DateInput>
            </SimpleForm>
        </Create>
    )
}
export default PostCreate