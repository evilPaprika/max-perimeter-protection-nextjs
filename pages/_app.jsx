import './styles.scss';
import 'github-markdown-css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import React from 'react';


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
