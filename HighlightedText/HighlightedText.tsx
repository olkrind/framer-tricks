import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

type Props = {
  text: string;
  highlightWord: string;
  highlightColor: string;
  textColor: string;
  highlightFontWeight: number;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  lineHeight: number;
  letterSpacing: number;
  textAlign: 'left' | 'center' | 'right';
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
};

export function LocalizedHighlighter({
  text,
  highlightWord,
  highlightColor,
  textColor,
  highlightFontWeight,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  textAlign,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: Props) {
  if (!highlightWord) return <p>{text}</p>;

  const escaped = highlightWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <p
      style={{
        margin: 0,
        fontSize,
        fontWeight,
        fontFamily,
        lineHeight: `${lineHeight}em`,
        letterSpacing: `${letterSpacing}em`,
        textAlign,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        color: textColor,
      }}
    >
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span
            key={i}
            style={{
              color: highlightColor,
              fontWeight: highlightFontWeight,
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}

addPropertyControls(LocalizedHighlighter, {
  text: {
    type: ControlType.String,
    title: 'Text',
    defaultValue: 'I want to highlight this text.',
  },
  highlightWord: {
    type: ControlType.String,
    title: 'Highlight',
    defaultValue: 'highlight',
  },
  textColor: {
    type: ControlType.Color,
    title: 'Color T',
    defaultValue: '#000000',
  },
  fontWeight: {
    type: ControlType.Number,
    title: 'Weight T',
    defaultValue: 600,
    min: 100,
    max: 900,
    step: 100,
  },
  highlightColor: {
    type: ControlType.Color,
    title: 'Color H',
    defaultValue: '#41AF2F',
  },
  highlightFontWeight: {
    type: ControlType.Number,
    title: 'Weight H',
    defaultValue: 600,
    min: 100,
    max: 900,
    step: 100,
  },
  fontSize: {
    type: ControlType.Number,
    title: 'Size',
    defaultValue: 45,
    min: 8,
    max: 100,
    unit: 'px',
  },
  fontFamily: {
    type: ControlType.String,
    title: 'Font',
    defaultValue: 'Inter',
  },
  lineHeight: {
    type: ControlType.Number,
    title: 'Line',
    defaultValue: 1.2,
    min: 1,
    max: 10,
    unit: 'em',
  },
  letterSpacing: {
    type: ControlType.Number,
    title: 'Letter',
    defaultValue: 0,
    min: -5,
    max: 20,
    unit: 'em',
  },
  textAlign: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['left', 'center', 'right'],
    optionTitles: ['Left', 'Center', 'Right'],
    defaultValue: 'left',
  },
  paddingTop: {
    type: ControlType.Number,
    title: 'Padding T',
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: 'px',
  },
  paddingBottom: {
    type: ControlType.Number,
    title: 'Padding B',
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: 'px',
  },
  paddingLeft: {
    type: ControlType.Number,
    title: 'Padding L',
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: 'px',
  },
  paddingRight: {
    type: ControlType.Number,
    title: 'Padding R',
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: 'px',
  },
});
