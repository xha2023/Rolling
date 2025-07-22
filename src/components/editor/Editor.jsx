import React from 'react';
import styled from 'styled-components';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

// 1. 에디터 전체를 감싸는 Wrapper를 styled-component로 정의
const EditorWrapper = styled.div`
  /* TipTap 에디터의 기본 스타일을 여기에 추가할 수 있습니다. */
  .ProseMirror {
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 4px;
    min-height: 200px;
  }

  /* 2. placeholder를 위한 스타일을 내부에 직접 작성 */
  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
`;

const Editor = ({ content, onContentChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '여기에 내용을 입력하세요...',
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  return (
    // 3. 만들어둔 Wrapper로 에디터를 감싸줌
    <EditorWrapper>
      <EditorContent editor={editor} />
    </EditorWrapper>
  );
};

export default Editor;
