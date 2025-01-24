"use server";

import type { CreateFormProps } from "@/types";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getDatabase() {
    const response = await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID! })
    return response;
}

export async function createForm({ first_name = "", middle_name = "", last_name = "", email = "", phone_number = "", messages = "" }: CreateFormProps){
    try {
        return await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID! },
            properties: {
                [process.env.NOTION_FORM_FIRST_NAME_ID!] : {
                    title: [
                        {
                            type: "text",
                            text: {
                                content: first_name
                            }
                        }
                    ]
                },
                [process.env.NOTION_FORM_MIDDLE_NAME_ID!]: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: middle_name
                            }
                        }
                    ]
                },
                [process.env.NOTION_FORM_LAST_NAME_ID!]: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: last_name
                            }
                        }
                    ]
                },
                [process.env.NOTION_FORM_EMAIL_ADDRESS_ID!]: {
                    email: email,
                    type: "email"
                },
                [process.env.NOTION_FORM_PHONE_NUMBER_ID!]: {
                    phone_number: phone_number,
                    type: "phone_number"
                },
                [process.env.NOTION_FORM_MESSAGE_ID!]: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: messages
                            }
                        }
                    ]
                },
            }
        })
    } catch (error) {
        
    }
}