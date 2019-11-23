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
  LittleRelated = '28px',
  Related = '8px',
  StronglyRelated = '4px'
}

export const globalStyle = css`
  ${emotionReset}
  html * {
    font-family: vdl-gigamarujr, sans-serif;
    font-weight: 500;
    font-style: normal;
    color: ${Colors.Text};
    line-height: 2.0em;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: ${FontSize.Title};
  }
`
