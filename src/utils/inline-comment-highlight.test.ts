import { createInlineCommentHighlight } from './inline-comment-highlight';

describe('inline comment highlight creation', () => {
    it('wraps the selection and leaves a writable inline footnote', () => {
        expect(createInlineCommentHighlight('source')).toEqual({
            replacement: '==source==^[]',
            cursorOffset: 12
        });
    });

    it('calculates the cursor position for a multiline selection', () => {
        expect(createInlineCommentHighlight('first\nsecond')).toEqual({
            replacement: '==first\nsecond==^[]',
            cursorOffset: 18
        });
    });
});
