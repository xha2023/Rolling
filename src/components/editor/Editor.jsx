import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

// 1. 에디터 전체를 감싸는 Wrapper를 styled-component로 정의
const EditorWrapper = styled.div`
  /* TipTap 에디터의 기본 스타일을 여기에 추가할 수 있습니다. */
  border: 1.5px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.error : theme.colors.gray[300]};
  border-radius: 8px;
  padding: 12px;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  .ProseMirror {
    outline: none;
    min-height: 160px;
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

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin: 6px 4px 0;
`;

const Editor = ({ content, onContentChange, onBlur, isError }) => {
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
    <>
      <EditorWrapper $isError={isError}>
        <EditorContent editor={editor} onBlur={onBlur} />
      </EditorWrapper>
      {isError && <ErrorMessage>내용을 입력해 주세요.</ErrorMessage>}
    </>
  );
};

export default Editor;
