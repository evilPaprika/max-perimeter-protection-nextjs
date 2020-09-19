import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import matter from 'gray-matter';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import siteMetadataContent from '../content/site-metadata.md';


export default function BookCallModal(props) {
    const { register, handleSubmit, errors, control } = useForm();
    const { book_call_email } = matter(siteMetadataContent).data;
    const [state, setState] = useState(null);

    const onSubmit = (data) => {
        setState('loading');
        fetch('https://api.sendinblue.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': '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',
                accept: 'application/json',
            },
            body: JSON.stringify(
                {
                    subject: `Заказан звонок от ${data.name}`,
                    sender: {
                        name: 'website bot',
                        email: book_call_email,
                    },
                    htmlContent:
                        `${data.name} попросил(а) позвонить ему в 
                        ${format(data.datetime, 'd MMMM HH:mm', { locale: ruLocale })} 
                        по телефону +${data.phone_number}\n
                        ${data.comment ? `Комментарий: ${data.comment}` : ''}`,
                    to: [
                        {
                            email: book_call_email,
                            name: data.name,
                        },
                    ],
                },
            ),
        }).then((response) => response.json())
            .then(() => {
                setState('success');
            }).catch(() => setState('error'));
    };

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={state === 'loading' && 'bookCallModal'}
        >
            {!state && (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Закажите звонок
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label className="mr-3 mt-1  d-block">
                                    Ваше имя:
                                </Form.Label>
                                <Form.Control
                                    ref={register({ required: true })}
                                    name="name"
                                    type="text"
                                    style={errors.name && { borderColor: 'red' }}
                                    placeholder="Имя"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="">
                                    Номер телефона:
                                </Form.Label>
                                <Controller
                                    as={PhoneInput}
                                    name="phone_number"
                                    control={control}
                                    rules={{ required: true, minLength: 7 }}
                                    country="ru"
                                    specialLabel=""
                                    placeholder="Ваш телефон"
                                    inputProps={{
                                        required: true,
                                        style: errors.phone_number && { borderColor: 'red' },
                                    }}
                                    defaultValue=""
                                />
                                <Form.Text className="text-muted">
                                    Мы никогда никому не передадим ваш телефон.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mr-3 mt-1  d-block">
                                    Когда перезвонить:
                                </Form.Label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                                    <Controller
                                        as={DateTimePicker}
                                        name="datetime"
                                        rules={{ required: true }}
                                        control={control}
                                        defaultValue={new Date()}
                                        format="d MMMM HH:mm"
                                        ampm={false}
                                        cancelLabel="отмена"
                                        InputProps={{
                                            disableUnderline: true,
                                            className: 'form-control',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Комментарий"
                                    ref={register}
                                    name="comment"
                                    as="textarea"
                                    rows={4}
                                />
                            </Form.Group>
                            <Button className="float-right" variant="primary" type="submit">
                                Готово
                            </Button>
                        </Form>
                    </Modal.Body>
                </>
            )}
            {state === 'loading' && (
                <Spinner className="m-auto" animation="border" />
            )}
            {state === 'success' && (
                <Alert variant="success" className="mb-0">
                    <Alert.Heading>Мы получили ваш телефон</Alert.Heading>
                    <p>
                        Мы перезвоним вам в указанное вами время
                    </p>
                    <hr />
                    <Button
                        className="float-right"
                        variant="success"
                        onClick={() => {
                            props.setShow(false);
                            setState(null);
                        }}
                    >
                        Ок
                    </Button>
                </Alert>
            )}
            {state === 'error' && (
                <Alert variant="warning" className="mb-0">
                    <Alert.Heading>Произошла ошибка</Alert.Heading>
                    <p>
                        Пожалуйста попробуйте еще раз или позвоните нам
                    </p>
                    <hr />
                    <Button
                        className="float-right"
                        variant="warning"
                        onClick={() => {
                            props.setShow(false);
                            setState(null);
                        }}
                    >
                        Ок
                    </Button>
                </Alert>
            )}
            <style global jsx>
                {`
                    .bookCallModal .modal-content{
                        min-height: 40vh;
                    }
                `}
            </style>
        </Modal>
    );
}
