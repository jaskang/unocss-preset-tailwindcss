import { type Rule } from '@unocss/core'

import { maybeCustom, type Theme } from '../theme'

export const aspectRatio: Rule<Theme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[], { theme }) => {
      if (theme.aspectRatio[d]) {
        return { 'aspect-ratio': theme.aspectRatio[d] }
      }
      return maybeCustom('aspect-ratio', d)
    },
    { autocomplete: ['aspect-$aspectRatio'] },
  ],
]

export const columns: Rule<Theme>[] = [
  [
    /^columns-?(.+)$/,
    ([, d]: string[], { theme }) => {
      if (theme.columns[d]) {
        return { columns: theme.columns[d] }
      }
      return maybeCustom('columns', d)
    },
    { autocomplete: ['columns-$columns'] },
  ],
]

export const breakAfter: Rule<Theme>[] = [
  ['break-after-auto', { 'break-after': 'auto' }],
  ['break-after-avoid', { 'break-after': 'avoid' }],
  ['break-after-all', { 'break-after': 'all' }],
  ['break-after-avoid-page', { 'break-after': 'avoid-page' }],
  ['break-after-page', { 'break-after': 'page' }],
  ['break-after-left', { 'break-after': 'left' }],
  ['break-after-right', { 'break-after': 'right' }],
  ['break-after-column', { 'break-after': 'column' }],
]

export const breakBefore: Rule<Theme>[] = [
  ['break-before-auto', { 'break-before': 'auto' }],
  ['break-before-avoid', { 'break-before': 'avoid' }],
  ['break-before-all', { 'break-before': 'all' }],
  ['break-before-avoid-page', { 'break-before': 'avoid-page' }],
  ['break-before-page', { 'break-before': 'page' }],
  ['break-before-left', { 'break-before': 'left' }],
  ['break-before-right', { 'break-before': 'right' }],
  ['break-before-column', { 'break-before': 'column' }],
]

export const breakInside: Rule<Theme>[] = [
  ['break-inside-auto', { 'break-inside': 'auto' }],
  ['break-inside-avoid', { 'break-inside': 'avoid' }],
  ['break-inside-avoid-page', { 'break-inside': 'avoid-page' }],
  ['break-inside-avoid-column', { 'break-inside': 'avoid-column' }],
]

export const boxDecorationBreak: Rule<Theme>[] = [
  ['decoration-slice', { 'box-decoration-break': 'slice' }],
  ['decoration-clone', { 'box-decoration-break': 'clone' }],
]

export const boxSizing: Rule<Theme>[] = [
  ['box-border', { 'box-sizing': 'border-box' }],
  ['box-content', { 'box-sizing': 'content-box' }],
]

export const display: Rule<Theme>[] = [
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

export const floats: Rule<Theme>[] = [
  ['float-right', { float: 'right' }],
  ['float-left', { float: 'left' }],
  ['float-none', { float: 'none' }],
]

export const clear: Rule<Theme>[] = [
  ['clear-left', { clear: 'left' }],
  ['clear-right', { clear: 'right' }],
  ['clear-both', { clear: 'both' }],
  ['clear-none', { clear: 'none' }],
]

export const isolation: Rule<Theme>[] = [
  ['isolate', { isolation: 'isolate' }],
  ['isolation-auto', { isolation: 'auto' }],
]

export const objectFit: Rule<Theme>[] = [
  ['object-contain', { 'object-fit': 'contain' }],
  ['object-cover', { 'object-fit': 'cover' }],
  ['object-fill', { 'object-fit': 'fill' }],
  ['object-none', { 'object-fit': 'none' }],
  ['object-scale-down', { 'object-fit': 'scale-down' }],
]

export const objectPosition: Rule<Theme>[] = [
  [
    /^object-?(.+)$/,
    ([, d]: string[], { theme }) => {
      if (theme.objectPosition[d]) {
        return { objectPosition: theme.objectPosition[d] }
      }
      return maybeCustom('objectPosition', d)
    },
    { autocomplete: ['columns-$objectPosition'] },
  ],
]

export const overflow: Rule<Theme>[] = [
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

export const overscrollBehavior: Rule<Theme>[] = [
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

export const position: Rule<Theme>[] = [
  ['static', { position: 'static' }],
  ['fixed', { position: 'fixed' }],
  ['absolute', { position: 'absolute' }],
  ['relative', { position: 'relative' }],
  ['sticky', { position: 'sticky' }],
]

export const visibility: Rule<Theme>[] = [
  ['visible', { visibility: 'visible' }],
  ['invisible', { visibility: 'hidden' }],
  ['collapse', { visibility: 'collapse' }],
]

export const zIndex: Rule<Theme>[] = [
  [
    /^z-?(.+)$/,
    ([, d]: string[], { theme }) => {
      if (theme.zIndex[d]) {
        return { zIndex: theme.zIndex[d] }
      }
      return maybeCustom('zIndex', d)
    },
    { autocomplete: ['z-$zIndex'] },
  ],
]
