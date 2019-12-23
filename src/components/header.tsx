import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export const dataQuery = graphql`
  fragment SiteMetaData on IndexJson {
    siteMetaData {
      title,
      description,
      type,
      image,
      twitter {
        site
      }
    }
  }
`

interface Props {
  data: {
    title: String,
    description: String,
    type: String,
    image: String,
    twitter: {
      site: String
    }
  }
}

const Header = ({
  data: {
    title,
    description,
    type,
    image,
    twitter,
  },
}: Props) => (
  <Helmet
    meta={[
      {
        name: 'charset',
        content: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'title',
        content: title,
      },
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: type,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        name: 'twitter:card',
        content: description,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:site',
        content: twitter.site,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
  >
    <script>
      {`
    (function(d) {
      var config = {
        kitId: 'jwd1shg',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    `}
    </script>
    <script src="https://cdn.lr-ingest.io/LogRocket.min.js" crossOrigin="anonymous" />
    <script>{`window.LogRocket && window.LogRocket.init('2dcep3/matsumotokazuyaio');`}</script>
  </Helmet>
)

export default Header
