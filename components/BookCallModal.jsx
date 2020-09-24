import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import matter from 'gray-matter';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import siteMetadataContent from '../content/site-metadata.md';


registerLocale('ru', ruLocale);
setDefaultLocale('ru');


export default function BookCallModal({ setShow, ...props }) {
    const { register, handleSubmit, errors, control } = useForm();
    const { book_call_email } = matter(siteMetadataContent).data;
    const [state, setState] = useState(null);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

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
                        `${data.name} попросил(а) позвонить 
                        ${format(date, 'd MMMM', { locale: ruLocale })},
                        ${format(time, 'в HH:mm', { locale: ruLocale })},
                         по телефону <a href="tel:+${data.phone_number}">+${data.phone_number}</a><br>
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
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                    className="form-control"
                                    defaultValue={new Date()}
                                    minDate={new Date()}
                                    dateFormat="d MMMM yyyy"
                                />
                                <DatePicker
                                    selected={time}
                                    onChange={(time) => setTime(time)}
                                    className="form-control"
                                    defaultValue={new Date()}
                                    dateFormat="HH:mm"
                                    showTimeSelect
                                    timeCaption="Время"
                                    showTimeSelectOnly
                                />
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
                    <Alert.Heading>Запрос принят!</Alert.Heading>
                    <p>
                        Мы перезвоним вам в указанное вами время
                    </p>
                    <hr />
                    <Button
                        className="float-right"
                        variant="success"
                        onClick={() => {
                            setShow(false);
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
                            setShow(false);
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
                    
                    .bookCall__dateTime .react-datetime-picker__wrapper {
                        border: 0;
                    }
                `}
            </style>
        </Modal>
    );
}
