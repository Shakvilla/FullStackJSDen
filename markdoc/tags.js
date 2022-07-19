import { Callout } from '@/components/Callout'
import { LinkGrid } from '@/components/LinkGrid'
import Image from 'next/image'


const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
      width: { type: Number},
      height: { type: Number},
      loader: {type: Object}
    },
    render: ({ src, alt = '', width, height, caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={src} alt={alt} width={width} height={height} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'link-grid': {
    render: LinkGrid,
  },
  'link-grid-link': {
    selfClosing: true,
    render: LinkGrid.Link,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
