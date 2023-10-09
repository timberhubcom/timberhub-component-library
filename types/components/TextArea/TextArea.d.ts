import React from 'react';
type TextAreaProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    labelClass?: string;
    description?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: string;
};
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
