"use client"
import React from 'react';
import Form from 'next/form'
import './Form.css'

const FormSearch = () => {

    return (
        <div className={'form'}>
            <Form action={'/search'} >
                    <input name={"query"} type={'text'} placeholder={'Search'}/>
                    <button type="submit">Submit</button>
            </Form>
        </div>
);
};

export default FormSearch;