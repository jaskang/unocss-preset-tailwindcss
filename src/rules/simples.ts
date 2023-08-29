import { type Rule } from '@unocss/core'

import { type FullTheme } from '../theme'
import { bracketValue, maybeCustom, simpleRule, simpleRuleOptional } from '../theme/utils'

export const aspectRatio: Rule<FullTheme>[] = [simpleRule('aspect', 'aspectRatio')]

export const columns: Rule<FullTheme>[] = [simpleRule('columns', 'columns')]

export const breakAfter: Rule<FullTheme>[] = [
  ['break-after-auto', { 'break-after': 'auto' }],
  ['break-after-avoid', { 'break-after': 'avoid' }],
  ['break-after-all', { 'break-after': 'all' }],
  ['break-after-avoid-page', { 'break-after': 'avoid-page' }],
  ['break-after-page', { 'break-after': 'page' }],
  ['break-after-left', { 'break-after': 'left' }],
  ['break-after-right', { 'break-after': 'right' }],
  ['break-after-column', { 'break-after': 'column' }],
]

export const breakBefore: Rule<FullTheme>[] = [
  ['break-before-auto', { 'break-before': 'auto' }],
  ['break-before-avoid', { 'break-before': 'avoid' }],
  ['break-before-all', { 'break-before': 'all' }],
  ['break-before-avoid-page', { 'break-before': 'avoid-page' }],
  ['break-before-page', { 'break-before': 'page' }],
  ['break-before-left', { 'break-before': 'left' }],
  ['break-before-right', { 'break-before': 'right' }],
  ['break-before-column', { 'break-before': 'column' }],
]

export const breakInside: Rule<FullTheme>[] = [
  ['break-inside-auto', { 'break-inside': 'auto' }],
  ['break-inside-avoid', { 'break-inside': 'avoid' }],
  ['break-inside-avoid-page', { 'break-inside': 'avoid-page' }],
  ['break-inside-avoid-column', { 'break-inside': 'avoid-column' }],
]

export const boxDecorationBreak: Rule<FullTheme>[] = [
  ['decoration-slice', { 'box-decoration-break': 'slice' }],
  ['decoration-clone', { 'box-decoration-break': 'clone' }],
]

export const boxSizing: Rule<FullTheme>[] = [
  ['box-border', { 'box-sizing': 'border-box' }],
  ['box-content', { 'box-sizing': 'content-box' }],
]

export const display: Rule<FullTheme>[] = [
  ['block', { display: 'block' }],
  ['inline-block', { display: 'inline-block' }],
  ['inline', { display: 'inline' }],
  ['flex', { display: 'flex' }],
  ['inline-flex', { display: 'inline-flex' }],
  ['table', { display: 'table' }],
  ['inline-table', { display: 'inline-table' }],
  ['table-caption', { display: 'table-caption' }],
  ['table-cell', { display: 'table-cell' }],
  ['table-column', { display: 'table-column' }],
  ['table-column-group', { display: 'table-column-group' }],
  ['table-footer-group', { display: 'table-footer-group' }],
  ['table-header-group', { display: 'table-header-group' }],
  ['table-row-group', { display: 'table-row-group' }],
  ['table-row', { display: 'table-row' }],
  ['flow-root', { display: 'flow-root' }],
  ['grid', { display: 'grid' }],
  ['inline-grid', { display: 'inline-grid' }],
  ['contents', { display: 'contents' }],
  ['list-item', { display: 'list-item' }],
  ['hidden', { display: 'none' }],
]

export const floats: Rule<FullTheme>[] = [
  ['float-right', { float: 'right' }],
  ['float-left', { float: 'left' }],
  ['float-none', { float: 'none' }],
]

export const clear: Rule<FullTheme>[] = [
  ['clear-left', { clear: 'left' }],
  ['clear-right', { clear: 'right' }],
  ['clear-both', { clear: 'both' }],
  ['clear-none', { clear: 'none' }],
]

export const isolation: Rule<FullTheme>[] = [
  ['isolate', { isolation: 'isolate' }],
  ['isolation-auto', { isolation: 'auto' }],
]

export const objectFit: Rule<FullTheme>[] = [
  ['object-contain', { 'object-fit': 'contain' }],
  ['object-cover', { 'object-fit': 'cover' }],
  ['object-fill', { 'object-fit': 'fill' }],
  ['object-none', { 'object-fit': 'none' }],
  ['object-scale-down', { 'object-fit': 'scale-down' }],
]

export const objectPosition: Rule<FullTheme>[] = [simpleRule('object', 'objectPosition')]

export const overflow: Rule<FullTheme>[] = [
  ['overflow-auto', { overflow: 'auto' }],
  ['overflow-hidden', { overflow: 'hidden' }],
  ['overflow-clip', { overflow: 'clip' }],
  ['overflow-visible', { overflow: 'visible' }],
  ['overflow-scroll', { overflow: 'scroll' }],
  ['overflow-x-auto', { 'overflow-x': 'auto' }],
  ['overflow-y-auto', { 'overflow-y': 'auto' }],
  ['overflow-x-hidden', { 'overflow-x': 'hidden' }],
  ['overflow-y-hidden', { 'overflow-y': 'hidden' }],
  ['overflow-x-clip', { 'overflow-x': 'clip' }],
  ['overflow-y-clip', { 'overflow-y': 'clip' }],
  ['overflow-x-visible', { 'overflow-x': 'visible' }],
  ['overflow-y-visible', { 'overflow-y': 'visible' }],
  ['overflow-x-scroll', { 'overflow-x': 'scroll' }],
  ['overflow-y-scroll', { 'overflow-y': 'scroll' }],
]

export const overscrollBehavior: Rule<FullTheme>[] = [
  ['overscroll-auto', { 'overscroll-behavior': 'auto' }],
  ['overscroll-contain', { 'overscroll-behavior': 'contain' }],
  ['overscroll-none', { 'overscroll-behavior': 'none' }],
  ['overscroll-y-auto', { 'overscroll-behavior-y': 'auto' }],
  ['overscroll-y-contain', { 'overscroll-behavior-y': 'contain' }],
  ['overscroll-y-none', { 'overscroll-behavior-y': 'none' }],
  ['overscroll-x-auto', { 'overscroll-behavior-x': 'auto' }],
  ['overscroll-x-contain', { 'overscroll-behavior-x': 'contain' }],
  ['overscroll-x-none', { 'overscroll-behavior-x': 'none' }],
]

export const position: Rule<FullTheme>[] = [
  ['static', { position: 'static' }],
  ['fixed', { position: 'fixed' }],
  ['absolute', { position: 'absolute' }],
  ['relative', { position: 'relative' }],
  ['sticky', { position: 'sticky' }],
]

export const inset: Rule<FullTheme>[] = [
  simpleRule('inset-x', 'inset', ['left', 'right']),
  simpleRule('inset-y', 'inset', ['top', 'bottom']),
  simpleRule('inset', 'inset'),
  simpleRule('start', 'inset', 'inset-inline-start'),
  simpleRule('end', 'inset', 'inset-inline-end'),
  simpleRule('top', 'inset', 'top'),
  simpleRule('bottom', 'inset', 'bottom'),
  simpleRule('left', 'inset', 'left'),
  simpleRule('right', 'inset', 'right'),
]

export const visibility: Rule<FullTheme>[] = [
  ['visible', { visibility: 'visible' }],
  ['invisible', { visibility: 'hidden' }],
  ['collapse', { visibility: 'collapse' }],
]

export const zIndex: Rule<FullTheme>[] = [simpleRule('z', 'zIndex')]

export const flexBasic: Rule<FullTheme>[] = [simpleRule('basis', 'flexBasis')]

export const flexDirection: Rule<FullTheme>[] = [
  ['flex-row', { 'flex-direction': 'row' }],
  ['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
  ['flex-col', { 'flex-direction': 'column' }],
  ['flex-col-reverse', { 'flex-direction': 'column-reverse' }],
]

export const flexWrap: Rule<FullTheme>[] = [
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
]

export const flex: Rule<FullTheme>[] = [simpleRule('flex', 'flex')]

export const flexGrow: Rule<FullTheme>[] = [simpleRuleOptional('grow', 'flexGrow')]

export const flexShrink: Rule<FullTheme>[] = [simpleRuleOptional('shrink', 'flexShrink')]

export const order: Rule<FullTheme>[] = [simpleRule('order', 'order')]

export const gridTemplateColumns: Rule<FullTheme>[] = [
  simpleRule('grid-cols', 'gridTemplateColumns'),
]

export const gridColumn: Rule<FullTheme>[] = [
  simpleRule('col-start', 'gridColumnStart'),
  simpleRule('col-end', 'gridColumnEnd'),
  simpleRule('col', 'gridColumn'),
]

export const gridTemplateRows: Rule<FullTheme>[] = [simpleRule('grid-rows', 'gridTemplateRows')]

export const gridRow: Rule<FullTheme>[] = [
  simpleRule('row-start', 'gridRowStart'),
  simpleRule('row-end', 'gridRowEnd'),
  simpleRule('row', 'gridRow'),
]

export const gridAutoFlow: Rule<FullTheme>[] = [
  ['grid-flow-row', { 'grid-auto-flow': 'row' }],
  ['grid-flow-col', { 'grid-auto-flow': 'column' }],
  ['grid-flow-dense', { 'grid-auto-flow': 'dense' }],
  ['grid-flow-row-dense', { 'grid-auto-flow': 'row dense' }],
  ['grid-flow-col-dense', { 'grid-auto-flow': 'column dense' }],
]

export const gridAutoColumns: Rule<FullTheme>[] = [simpleRule('auto-cols', 'gridAutoColumns')]

export const gridAutoRows: Rule<FullTheme>[] = [simpleRule('auto-rows', 'gridAutoRows')]

export const gap: Rule<FullTheme>[] = [
  simpleRule('gap', 'gap'),
  simpleRule('gap-x', 'gap', 'column-gap'),
  simpleRule('gap-y', 'gap', 'row-gap'),
]

export const justifyContent: Rule<FullTheme>[] = [
  ['justify-normal', { 'justify-content': 'normal' }],
  ['justify-start', { 'justify-content': 'flex-start' }],
  ['justify-end', { 'justify-content': 'flex-end' }],
  ['justify-center', { 'justify-content': 'center' }],
  ['justify-between', { 'justify-content': 'space-between' }],
  ['justify-around', { 'justify-content': 'space-around' }],
  ['justify-evenly', { 'justify-content': 'space-evenly' }],
  ['justify-stretch', { 'justify-content': 'stretch' }],
]

export const justifyItems: Rule<FullTheme>[] = [
  ['justify-items-start', { 'justify-items': 'start' }],
  ['justify-items-end', { 'justify-items': 'end' }],
  ['justify-items-center', { 'justify-items': 'center' }],
  ['justify-items-stretch', { 'justify-items': 'stretch' }],
]

export const justifySelf: Rule<FullTheme>[] = [
  ['justify-self-auto', { 'justify-self': 'auto' }],
  ['justify-self-start', { 'justify-self': 'start' }],
  ['justify-self-end', { 'justify-self': 'end' }],
  ['justify-self-center', { 'justify-self': 'center' }],
  ['justify-self-stretch', { 'justify-self': 'stretch' }],
]

export const alignContent: Rule<FullTheme>[] = [
  ['content-normal', { 'align-content': 'normal' }],
  ['content-center', { 'align-content': 'center' }],
  ['content-start', { 'align-content': 'flex-start' }],
  ['content-end', { 'align-content': 'flex-end' }],
  ['content-between', { 'align-content': 'space-between' }],
  ['content-around', { 'align-content': 'space-around' }],
  ['content-evenly', { 'align-content': 'space-evenly' }],
  ['content-baseline', { 'align-content': 'baseline' }],
  ['content-stretch', { 'align-content': 'stretch' }],
]

export const alignItems: Rule<FullTheme>[] = [
  ['items-start', { 'align-items': 'flex-start' }],
  ['items-end', { 'align-items': 'flex-end' }],
  ['items-center', { 'align-items': 'center' }],
  ['items-baseline', { 'align-items': 'baseline' }],
  ['items-stretch', { 'align-items': 'stretch' }],
]

export const alignSelf: Rule<FullTheme>[] = [
  ['self-auto', { 'align-self': 'auto' }],
  ['self-start', { 'align-self': 'flex-start' }],
  ['self-end', { 'align-self': 'flex-end' }],
  ['self-center', { 'align-self': 'center' }],
  ['self-stretch', { 'align-self': 'stretch' }],
  ['self-baseline', { 'align-self': 'baseline' }],
]

export const placeContent: Rule<FullTheme>[] = [
  ['place-content-center', { 'place-content': 'center' }],
  ['place-content-start', { 'place-content': 'start' }],
  ['place-content-end', { 'place-content': 'end' }],
  ['place-content-between', { 'place-content': 'space-between' }],
  ['place-content-around', { 'place-content': 'space-around' }],
  ['place-content-evenly', { 'place-content': 'space-evenly' }],
  ['place-content-baseline', { 'place-content': 'baseline' }],
  ['place-content-stretch', { 'place-content': 'stretch' }],
]

export const placeItems: Rule<FullTheme>[] = [
  ['place-items-start', { 'place-items': 'start' }],
  ['place-items-end', { 'place-items': 'end' }],
  ['place-items-center', { 'place-items': 'center' }],
  ['place-items-baseline', { 'place-items': 'baseline' }],
  ['place-items-stretch', { 'place-items': 'stretch' }],
]

export const placeSelf: Rule<FullTheme>[] = [
  ['place-self-auto', { 'place-self': 'auto' }],
  ['place-self-start', { 'place-self': 'start' }],
  ['place-self-end', { 'place-self': 'end' }],
  ['place-self-center', { 'place-self': 'center' }],
  ['place-self-stretch', { 'place-self': 'stretch' }],
]

export const padding: Rule<FullTheme>[] = [
  simpleRule('p', 'padding'),
  simpleRule('px', 'padding', ['padding-left', 'padding-right']),
  simpleRule('py', 'padding', ['padding-top', 'padding-bottom']),
  simpleRule('pl', 'padding', 'padding-left'),
  simpleRule('pr', 'padding', 'padding-right'),
  simpleRule('pt', 'padding', 'padding-top'),
  simpleRule('pb', 'padding', 'padding-bottom'),
  simpleRule('ps', 'padding', 'padding-inline-start'),
  simpleRule('pe', 'padding', 'padding-inline-end'),
]

export const margin: Rule<FullTheme>[] = [
  simpleRule('m', 'margin'),
  simpleRule('mx', 'margin', ['margin-left', 'margin-right']),
  simpleRule('my', 'margin', ['margin-top', 'margin-bottom']),
  simpleRule('ml', 'margin', 'margin-left'),
  simpleRule('mr', 'margin', 'margin-right'),
  simpleRule('mt', 'margin', 'margin-top'),
  simpleRule('mb', 'margin', 'margin-bottom'),
  simpleRule('ms', 'margin', 'margin-inline-start'),
  simpleRule('me', 'margin', 'margin-inline-end'),
]

export const width: Rule<FullTheme>[] = [
  simpleRule('w', 'width'),
  simpleRule('min-w', 'minWidth'),
  simpleRule('max-w', 'maxWidth'),
]

export const height: Rule<FullTheme>[] = [
  simpleRule('h', 'height'),
  simpleRule('min-h', 'minHeight'),
  simpleRule('max-h', 'maxHeight'),
]

export const fontSmoothing: Rule<FullTheme>[] = [
  [
    'antialiased',
    { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale' },
  ],
  ['subpixel-antialiased', { '-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto' }],
]

export const fontStyle: Rule<FullTheme>[] = [
  ['italic', { 'font-style': 'italic' }],
  ['not-italic', { 'font-style': 'normal' }],
]

export const fontWeight: Rule<FullTheme>[] = [simpleRule('font', 'fontWeight')]

export const fontVariantNumeric: Rule<FullTheme>[] = [
  ['normal-nums', { 'font-variant-numeric': 'normal' }],
  ['ordinal', { 'font-variant-numeric': 'ordinal' }],
  ['slashed-zero', { 'font-variant-numeric': 'slashed-zero' }],
  ['lining-nums', { 'font-variant-numeric': 'lining-nums' }],
  ['oldstyle-nums', { 'font-variant-numeric': 'oldstyle-nums' }],
  ['proportional-nums', { 'font-variant-numeric': 'proportional-nums' }],
  ['tabular-nums', { 'font-variant-numeric': 'tabular-nums' }],
  ['diagonal-fractions', { 'font-variant-numeric': 'diagonal-fractions' }],
  ['stacked-fractions', { 'font-variant-numeric': 'stacked-fractions' }],
]

export const letterSpacing: Rule<FullTheme>[] = [simpleRule('tracking', 'letterSpacing')]

export const lineHeight: Rule<FullTheme>[] = [simpleRule('leading', 'lineHeight')]

export const listStyleImage: Rule<FullTheme>[] = [simpleRule('list', 'listStyleImage')]

export const listStylePosition: Rule<FullTheme>[] = [
  ['list-inside', { 'list-style-position': 'inside' }],
  ['list-outside', { 'list-style-position': 'outside' }],
]

export const listStyleType: Rule<FullTheme>[] = [simpleRule('list', 'listStyleType')]

export const textAlign: Rule<FullTheme>[] = [
  ['text-left', { 'text-align': 'left' }],
  ['text-center', { 'text-align': 'center' }],
  ['text-right', { 'text-align': 'right' }],
  ['text-justify', { 'text-align': 'justify' }],
  ['text-start', { 'text-align': 'start' }],
  ['text-end', { 'text-align': 'end' }],
]
