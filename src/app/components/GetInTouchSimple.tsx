"use client";

import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function GetInTouchSimple() {
    const form: UseFormReturnType<FormValues> = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    return (
        <form onSubmit={form.onSubmit(() => {})}>
            <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
            >
                Get in touch
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    name="name"
                    variant="filled"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label="Email"
                    placeholder="Your email"
                    name="email"
                    variant="filled"
                    {...form.getInputProps('email')}
                />
            </SimpleGrid>

            <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
            />
            <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
            />

            <Group justify="center" mt="xl">
                <Button type="submit" size="md">
                    Send message
                </Button>
            </Group>
        </form>
    );
}

export default GetInTouchSimple;
