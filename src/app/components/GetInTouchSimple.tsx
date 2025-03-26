"use client";

import { Button, Group, Textarea, TextInput, Title } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function GetInTouchSimple() {
    const form: UseFormReturnType<FormValues> = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    return (
        <form
            onSubmit={form.onSubmit(() => {})}
            className="max-w-lg mx-auto p-6 bg-neutral-900 rounded-2xl shadow-lg w-1/2 animate-fade-up"
        >
            <Title className="text-white text-2xl font-bold font-commissioner text-center mb-5">
                Get in touch
            </Title>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-commissioner">
                <TextInput
                    label="Name"
                    placeholder=" Your name"
                    name="name"
                    variant="filled"
                    classNames={{
                        input: "bg-[#525252] text-white placeholder-gray-400 w-full border  border-[#b2b2b2] rounded-sm focus:ring-2 focus:ring-blue-500",
                        label: "text-white ",
                    }}
                    {...form.getInputProps("name")}
                />
                <TextInput
                    label="Email"
                    placeholder=" Your email"
                    name="email"
                    variant="filled"
                    classNames={{
                        input: "bg-[#525252] text-white placeholder-gray-400 border w-full border-[#b2b2b2] rounded-sm focus:ring-2 focus:ring-blue-500",
                        label: "text-white",
                    }}
                    {...form.getInputProps("email")}
                />
            </div>

            <div className="mt-4 w-full font-commissioner">
                <TextInput
                    label="Subject"
                    placeholder=" Subject"
                    name="subject"
                    variant="filled"
                    classNames={{
                        input: "bg-[#525252] text-white placeholder-gray-400 border border-[#b2b2b2] rounded-sm focus:ring-2 focus:ring-blue-500 w-full",
                        label: "text-white",
                    }}
                    {...form.getInputProps("subject")}
                />
            </div>

            <div className="mt-4 w-full font-commissioner">
                <Textarea
                    label="Message"
                    placeholder=" Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    classNames={{
                        input: "bg-[#525252] w-full text-white placeholder-gray-400 border border-[#b2b2b2] rounded-sm focus:ring-2 focus:ring-blue-500",
                        label: "text-white",
                    }}
                    {...form.getInputProps("message")}
                />
            </div>

            <Group className="flex justify-center mt-6 font-commissioner">
                <Button className="bg-neutral-600  text-white hover:bg-neutral-500 px-6 py-2 rounded-lg shadow-md">
                    Send message
                </Button>
            </Group>
        </form>
    );
}

export default GetInTouchSimple;
