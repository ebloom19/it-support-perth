import {
  EditorRoot,
  EditorContent,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  Command,
  renderItems,
} from "novel";
import { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { suggestionItems } from "./slash-command";
import { toast } from "sonner";
import { uploadImage } from "@/lib/upload";

interface AdvancedEditorProps {
  initialValue?: any;
  onChange: (value: any) => void;
}

export default function AdvancedEditor({
  initialValue,
  onChange,
}: AdvancedEditorProps) {
  const extensions = [
    StarterKit,
    Image.configure({
      HTMLAttributes: {
        class: "rounded-lg border",
      },
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: "text-blue-500 underline",
      },
    }),
    Placeholder.configure({
      placeholder: 'Press "/" for commands...',
    }),
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    Command.configure({
      suggestion: {
        items: () => suggestionItems,
        render: renderItems,
      },
    }),
  ];

  return (
    <div className="relative w-full">
      <EditorRoot>
        <EditorContent
          initialContent={initialValue}
          extensions={extensions as any}
          onUpdate={({ editor }) => {
            const json = editor.getJSON();
            onChange(json);
          }}
          editorProps={{
            attributes: {
              class:
                "prose prose-lg dark:prose-invert focus:outline-none max-w-full min-h-[500px] max-h-[70vh] overflow-y-auto p-8 border rounded-lg shadow-sm bg-white",
            },
            handleDrop: (view, event, _slice, moved) => {
              if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
                const file = event.dataTransfer.files[0];
                if (file.type.startsWith("image/")) {
                    const { schema } = view.state;
                    const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
                    
                    if (coordinates) {
                        const toastId = toast.loading("Uploading image...");
                        uploadImage(file).then(url => {
                            if (url) {
                                toast.success("Image uploaded", { id: toastId });
                                const node = schema.nodes.image.create({ src: url });
                                const transaction = view.state.tr.insert(coordinates.pos, node);
                                view.dispatch(transaction);
                            } else {
                                toast.error("Upload failed", { id: toastId });
                            }
                        });
                        return true;
                    }
                }
              }
              return false;
            },
            handlePaste: (view, event) => {
              if (event.clipboardData && event.clipboardData.files && event.clipboardData.files[0]) {
                const file = event.clipboardData.files[0];
                if (file.type.startsWith("image/")) {
                    const { schema } = view.state;
                    const toastId = toast.loading("Uploading image...");
                    uploadImage(file).then(url => {
                        if (url) {
                            toast.success("Image uploaded", { id: toastId });
                            const node = schema.nodes.image.create({ src: url });
                            const transaction = view.state.tr.replaceSelectionWith(node);
                            view.dispatch(transaction);
                        } else {
                            toast.error("Upload failed", { id: toastId });
                        }
                    });
                    return true;
                }
              }
              return false;
            },
          }}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-white px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 py-1.5 text-sm text-gray-500">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item: any) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command(val)}
                  className={`flex w-full items-center space-x-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-gray-100 aria-selected:bg-gray-200 cursor-pointer`}
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>
        </EditorContent>
      </EditorRoot>
    </div>
  );
}
