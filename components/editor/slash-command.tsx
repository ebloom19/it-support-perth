import {
    CheckSquare,
    Code,
    Heading1,
    Heading2,
    Heading3,
    ImageIcon,
    List,
    ListOrdered,
    MessageSquareQuote,
    Text,
    TextQuote,
} from "lucide-react";
import { createSuggestionItems } from "novel";

export const suggestionItems = createSuggestionItems([
    {
        title: "Text",
        description: "Just start typing with plain text.",
        searchTerms: ["p", "paragraph"],
        icon: <Text className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).setParagraph().run();
            } else {
                editor.chain().focus().setParagraph().run();
            }
        },
    },
    {
        title: "To-do List",
        description: "Track tasks with a to-do list.",
        searchTerms: ["todo", "task", "list", "check", "checkbox"],
        icon: <CheckSquare className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).toggleTaskList().run();
            } else {
                editor.chain().focus().toggleTaskList().run();
            }
        },
    },
    {
        title: "Heading 1",
        description: "Big section heading.",
        searchTerms: ["title", "big", "large"],
        icon: <Heading1 className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run();
            } else {
                editor.chain().focus().setHeading({ level: 1 }).run();
            }
        },
    },
    {
        title: "Heading 2",
        description: "Medium section heading.",
        searchTerms: ["subtitle", "medium"],
        icon: <Heading2 className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run();
            } else {
                editor.chain().focus().setHeading({ level: 2 }).run();
            }
        },
    },
    {
        title: "Heading 3",
        description: "Small section heading.",
        searchTerms: ["subtitle", "small"],
        icon: <Heading3 className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).setHeading({ level: 3 }).run();
            } else {
                editor.chain().focus().setHeading({ level: 3 }).run();
            }
        },
    },
    {
        title: "Bullet List",
        description: "Create a simple bullet list.",
        searchTerms: ["unordered", "point"],
        icon: <List className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).toggleBulletList().run();
            } else {
                editor.chain().focus().toggleBulletList().run();
            }
        },
    },
    {
        title: "Numbered List",
        description: "Create a list with numbering.",
        searchTerms: ["ordered"],
        icon: <ListOrdered className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).toggleOrderedList().run();
            } else {
                editor.chain().focus().toggleOrderedList().run();
            }
        },
    },
    {
        title: "Quote",
        description: "Capture a quotation.",
        searchTerms: ["blockquote"],
        icon: <TextQuote className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).toggleBlockquote().run();
            } else {
                editor.chain().focus().toggleBlockquote().run();
            }
        },
    },
    {
        title: "Code",
        description: "Capture a code snippet.",
        searchTerms: ["codeblock"],
        icon: <Code className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            if (range) {
                editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
            } else {
                editor.chain().focus().toggleCodeBlock().run();
            }
        },
    },
    {
        title: "Image",
        description: "Upload an image from your computer.",
        searchTerms: ["photo", "picture", "media"],
        icon: <ImageIcon className="w-18" />,
        command: ({ editor, range }: { editor: any; range: any }) => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = async () => {
                if (input.files?.length) {
                    const file = input.files[0];

                    // Show loading toast
                    const toastId = toast.loading("Uploading image...");

                    const url = await uploadImage(file);

                    if (url) {
                        toast.success("Image uploaded", { id: toastId });
                        if (range) {
                            editor.chain().focus().deleteRange(range).setImage({ src: url }).run();
                        } else {
                            editor.chain().focus().setImage({ src: url }).run();
                        }
                    } else {
                        toast.error("Upload failed", { id: toastId });
                    }
                }
            };
            input.click();
        },
    },
]);

import { uploadImage } from "@/lib/upload";
import { toast } from "sonner";
