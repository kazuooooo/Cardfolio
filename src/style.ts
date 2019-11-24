import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'

export enum Colors {
  Text = '#323333'
}

export enum FontSize {
  Title = '24px',
  SubTitle = '20px',
  Text = '16px',
  Supplemnet = '12px'
}

export enum Margins {
  Side = '64px',
  NotRelated = '28px',
  LittleRelated = '16px',
  Related = '8px',
  StronglyRelated = '4px'
}

export const shadow = '0 -3px 6px rgba(0, 0, 0, 0.3)'

export const globalStyle = css`
  ${emotionReset}
  html * {
    font-family: vdl-gigamarujr, sans-serif;
    font-weight: 500;
    font-style: normal;
    color: ${Colors.Text};
  }
  p {
    font-size: ${FontSize.Text};
    line-height: 2.0em;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: ${FontSize.Title};
  }
`
