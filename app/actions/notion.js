"use server";

import { Client } from "@notionhq/client";

function getNotionClient() {
    const apiKey = process.env.NOTION_API_KEY;
    if (!apiKey) {
        return null;
    }
    return new Client({ auth: apiKey });
}

export async function getDatabase() {
    try {
        const notion = getNotionClient();
        const databaseId = process.env.NOTION_DATABASE_ID;
        if (!notion || !databaseId) {
            return { success: false, error: "Notion is not configured." };
        }
        const response = await notion.databases.retrieve({ database_id: databaseId });
        return { success: true, data: response };
    } catch (error) {
        console.error("Error retrieving Notion database:", error);
        return { success: false, error: error.message || "Failed to retrieve Notion database." };
    }
}

export async function createForm({
    first_name = "",
    middle_name = "",
    last_name = "",
    email = "",
    phone_number = "",
    messages = "",
}) {
    try {
        const notion = getNotionClient();
        const databaseId = process.env.NOTION_DATABASE_ID;

        if (!notion || !databaseId) {
            console.warn("Notion credentials not set in environment. Submission simulated.");
            return {
                success: true,
                simulated: true,
                message: "Form received! Note: Configure NOTION_API_KEY and NOTION_DATABASE_ID in .env.local to persist in Notion."
            };
        }

        const properties = {};

        const firstNameId = process.env.NOTION_FORM_FIRST_NAME_ID;
        if (firstNameId) {
            properties[firstNameId] = {
                title: [
                    {
                        type: "text",
                        text: {
                            content: first_name,
                        },
                    },
                ],
            };
        }

        const middleNameId = process.env.NOTION_FORM_MIDDLE_NAME_ID;
        if (middleNameId && middle_name) {
            properties[middleNameId] = {
                rich_text: [
                    {
                        type: "text",
                        text: {
                            content: middle_name,
                        },
                    },
                ],
            };
        }

        const lastNameId = process.env.NOTION_FORM_LAST_NAME_ID;
        if (lastNameId) {
            properties[lastNameId] = {
                rich_text: [
                    {
                        type: "text",
                        text: {
                            content: last_name,
                        },
                    },
                ],
            };
        }

        const emailId = process.env.NOTION_FORM_EMAIL_ADDRESS_ID;
        if (emailId) {
            properties[emailId] = {
                email: email,
                type: "email",
            };
        }

        const phoneId = process.env.NOTION_FORM_PHONE_NUMBER_ID;
        if (phoneId && phone_number) {
            properties[phoneId] = {
                phone_number: phone_number,
                type: "phone_number",
            };
        }

        const messageId = process.env.NOTION_FORM_MESSAGE_ID;
        if (messageId) {
            properties[messageId] = {
                rich_text: [
                    {
                        type: "text",
                        text: {
                            content: messages,
                        },
                    },
                ],
            };
        }

        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties,
        });

        return { success: true, data: response };
    } catch (error) {
        console.error("Notion createForm error:", error);
        return {
            success: false,
            error: error.message || "Failed to submit message to Notion."
        };
    }
}
