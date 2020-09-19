import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import matter from 'gray-matter';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Cards from '../components/Cards';
import HeroCarousel from '../components/HeroCarousel';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import landingPageContent from '../content/landing-page.md';


const Index = () => {
    const { content } = matter(landingPageContent);

    return (
        <Layout pathname="/">
            <section>
                <HeroCarousel />
                <Cards />
                <MarkdownContent markdownBody={content} />
            </section>
        </Layout>
    );
};

export default Index;
