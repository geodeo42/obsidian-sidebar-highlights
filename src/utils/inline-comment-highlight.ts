export interface InlineCommentHighlight {
    replacement: string;
    cursorOffset: number;
}

export function createInlineCommentHighlight(selection: string): InlineCommentHighlight {
    const replacement = `==${selection}==^[]`;

    return {
        replacement,
        cursorOffset: replacement.length - 1
    };
}
