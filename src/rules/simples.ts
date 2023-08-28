import { type Rule } from '@unocss/core'

import { type FullTheme, maybeCustom } from '../theme'

export const aspectRatio: Rule<FullTheme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.aspectRatio[v]) {
        return { 'aspect-ratio': theme.aspectRatio[v] }
      }
      return maybeCustom('aspect-ratio', v)
    },
    { autocomplete: ['aspect-$aspectRatio'] },
  ],
]

export const columns: Rule<FullTheme>[] = [
  [
    /^columns-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.columns[v]) {
        return { columns: theme.columns[v] }
      }
      return maybeCustom('columns', v)
    },
    { autocomplete: ['columns-$columns'] },
  ],
]

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

export const objectPosition: Rule<FullTheme>[] = [
  [
    /^object-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.objectPosition[v]) {
        return { objectPosition: theme.objectPosition[v] }
      }
      return maybeCustom('objectPosition', v)
    },
    { autocomplete: ['columns-$objectPosition'] },
  ],
]

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

export const visibility: Rule<FullTheme>[] = [
  ['visible', { visibility: 'visible' }],
  ['invisible', { visibility: 'hidden' }],
  ['collapse', { visibility: 'collapse' }],
]

export const zIndex: Rule<FullTheme>[] = [
  [
    /^z-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.zIndex[v]) {
        return { zIndex: theme.zIndex[v] }
      }
      return maybeCustom('zIndex', v)
    },
    { autocomplete: ['z-$zIndex'] },
  ],
]

export const flexBasic: Rule<FullTheme>[] = [
  [
    /^basis-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.flexBasis[v]) {
        return { 'flex-basis': theme.flexBasis[v] }
      }
      return maybeCustom('flex-basis', v)
    },
    { autocomplete: ['basis-$flexBasis'] },
  ],
]

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

export const flex: Rule<FullTheme>[] = [
  [
    /^flex-?(.+)$/,
    ([, v]: string[], { theme }) => {
      if (theme.flex[v]) {
        return { flex: theme.flex[v] }
      }
      return maybeCustom('flex', v)
    },
    { autocomplete: ['flex-$flex'] },
  ],
]

export const flexGrow: Rule<FullTheme>[] = [
  [
    /^grow(?:-(.*))?$/,
    ([, v = 'DEFAULT'], { theme }) => {
      if (theme.flexGrow[v]) {
        return { 'flex-grow': theme.flexGrow[v] }
      }
      return maybeCustom('flex-grow', v)
    },
    { autocomplete: ['grow', 'grow-$flexGrow'] },
  ],
]

export const flexShrink: Rule<FullTheme>[] = [
  [
    /^shrink(?:-(.*))?$/,
    ([, v = 'DEFAULT'], { theme }) => {
      if (theme.flexShrink[v]) {
        return { 'flex-shrink': theme.flexShrink[v] }
      }
      return maybeCustom('flex-shrink', v)
    },
    { autocomplete: ['shrink', 'shrink-$flexShrink'] },
  ],
]
